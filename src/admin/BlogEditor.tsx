import { useCallback, useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { fetchPublicSlugs, uploadAdminImage } from './api';

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function BlogEditor({ value, onChange }: Props) {
  const [slugPickerOpen, setSlugPickerOpen] = useState(false);
  const [slugs, setSlugs] = useState<Array<{ slug: string; title: string; path: string }>>([]);
  const [slugError, setSlugError] = useState('');
  const [imageUploading, setImageUploading] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer' },
      }),
      Image.configure({
        HTMLAttributes: { loading: 'lazy', decoding: 'async' },
      }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || '',
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current && value !== undefined) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  }, [value, editor]);

  const openInternalLinkPicker = useCallback(async () => {
    setSlugError('');
    setSlugPickerOpen(true);
    try {
      const data = await fetchPublicSlugs();
      setSlugs(data.slugs);
    } catch (err) {
      setSlugError(err instanceof Error ? err.message : 'Could not load blog slugs');
    }
  }, []);

  const insertImage = useCallback(
    async (fromFile?: File) => {
      if (!editor) return;

      let src = '';
      if (fromFile) {
        setImageUploading(true);
        try {
          const uploaded = await uploadAdminImage(fromFile);
          src = uploaded.url;
        } catch (err) {
          window.alert(err instanceof Error ? err.message : 'Image upload failed');
          return;
        } finally {
          setImageUploading(false);
        }
      } else {
        const url = window.prompt('Image URL');
        if (!url?.trim()) return;
        src = url.trim();
      }

      const defaultAlt = fromFile
        ? fromFile.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim()
        : '';
      const alt = window.prompt('Alt text (accessibility)', defaultAlt);
      if (alt === null) return;

      editor.chain().focus().setImage({ src, alt: alt.trim() || undefined }).run();
    },
    [editor]
  );

  const insertInternalLink = useCallback(
    (path: string, title: string) => {
      if (!editor) return;
      const safeTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      editor
        .chain()
        .focus()
        .insertContent(`<a href="${path}">${safeTitle}</a>`)
        .run();
      setSlugPickerOpen(false);
    },
    [editor]
  );

  if (!editor) return null;

  return (
    <div className="admin-editor">
      <div className="admin-editor-toolbar" role="toolbar" aria-label="Editor toolbar">
        <button
          type="button"
          className={editor.isActive('bold') ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button
          type="button"
          className={editor.isActive('italic') ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
        <button
          type="button"
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </button>
        <button
          type="button"
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </button>
        <button
          type="button"
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          List
        </button>
        <button
          type="button"
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Quote
        </button>
        <button type="button" disabled={imageUploading} onClick={() => void insertImage()}>
          Image URL
        </button>
        <button type="button" disabled={imageUploading} onClick={() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = 'image/jpeg,image/png,image/webp,image/gif,image/avif';
          input.onchange = () => {
            const file = input.files?.[0];
            if (file) void insertImage(file);
          };
          input.click();
        }}>
          {imageUploading ? 'Uploading…' : 'Upload image'}
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
          }
        >
          Table
        </button>
        <button
          type="button"
          className={editor.isActive('link') ? 'is-active' : ''}
          onClick={() => {
            const prev = editor.getAttributes('link').href as string | undefined;
            const url = window.prompt('Link URL', prev || 'https://');
            if (url === null) return;
            if (url === '') {
              editor.chain().focus().extendMarkRange('link').unsetLink().run();
              return;
            }
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
          }}
        >
          Link
        </button>
        <button type="button" onClick={() => void openInternalLinkPicker()}>
          Insert internal link
        </button>
      </div>

      <EditorContent editor={editor} className="admin-editor-content" />

      {slugPickerOpen ? (
        <div className="admin-modal-backdrop" role="presentation" onClick={() => setSlugPickerOpen(false)}>
          <div
            className="admin-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Insert internal blog link"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Published blog posts</h3>
            {slugError ? <p className="admin-error">{slugError}</p> : null}
            {!slugError && slugs.length === 0 ? (
              <p className="admin-muted">No published posts yet.</p>
            ) : (
              <ul className="admin-slug-list">
                {slugs.map((s) => (
                  <li key={s.slug}>
                    <button type="button" onClick={() => insertInternalLink(s.path, s.title)}>
                      <strong>{s.title}</strong>
                      <span>{s.path}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setSlugPickerOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
