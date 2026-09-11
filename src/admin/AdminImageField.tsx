import { useId, useRef, useState } from 'react';
import { uploadAdminImage } from './api';

type Props = {
  label: string;
  url: string;
  alt: string;
  onUrlChange: (url: string) => void;
  onAltChange: (alt: string) => void;
  urlPlaceholder?: string;
  optional?: boolean;
};

export default function AdminImageField({
  label,
  url,
  alt,
  onUrlChange,
  onAltChange,
  urlPlaceholder = 'Upload below → Cloudinary URL (https://res.cloudinary.com/…)',
  optional = true,
}: Props) {
  const inputId = useId();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  async function onFileSelected(file: File | undefined) {
    if (!file) return;
    setUploadError('');
    setUploading(true);
    try {
      const { url: uploadedUrl } = await uploadAdminImage(file);
      onUrlChange(uploadedUrl);
      if (!alt.trim()) {
        const base = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
        if (base) onAltChange(base);
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  }

  return (
    <fieldset className="admin-image-field">
      <legend>
        {label}
        {optional ? <span className="admin-muted"> (optional)</span> : null}
      </legend>

      <div className="admin-image-field-grid">
        <div className="admin-image-preview-wrap">
          {url ? (
            <img src={url} alt={alt || label} className="admin-image-preview" />
          ) : (
            <div className="admin-image-preview admin-image-preview-empty">No image</div>
          )}
        </div>

        <div className="admin-image-field-inputs">
          <label className="admin-field" htmlFor={`${inputId}-url`}>
            <span>Image URL</span>
            <input
              id={`${inputId}-url`}
              value={url}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder={urlPlaceholder}
            />
          </label>

          <div className="admin-image-upload-row">
            <input
              ref={fileRef}
              id={`${inputId}-file`}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
              className="admin-file-input"
              onChange={(e) => void onFileSelected(e.target.files?.[0])}
            />
            <label htmlFor={`${inputId}-file`} className="admin-btn admin-btn-ghost admin-file-label">
              {uploading ? 'Uploading…' : 'Upload from computer'}
            </label>
            {url ? (
              <button
                type="button"
                className="admin-btn admin-btn-ghost"
                onClick={() => {
                  onUrlChange('');
                  onAltChange('');
                }}
              >
                Clear
              </button>
            ) : null}
          </div>

          <label className="admin-field" htmlFor={`${inputId}-alt`}>
            <span>Alt text (accessibility &amp; SEO)</span>
            <input
              id={`${inputId}-alt`}
              value={alt}
              onChange={(e) => onAltChange(e.target.value)}
              placeholder="Describe the image for screen readers"
            />
          </label>

          {uploadError ? <p className="admin-error">{uploadError}</p> : null}
          {url && /^https:\/\/res\.cloudinary\.com\//i.test(url) ? (
            <p className="admin-muted" style={{ color: '#86efac', marginTop: '0.5rem' }}>
              Saved on Cloudinary — this cover will show on the live blog listing.
            </p>
          ) : null}
          {url && url.startsWith('/Images/cms-uploads/') ? (
            <p className="admin-error" style={{ marginTop: '0.5rem' }}>
              This is a temporary server path and often breaks on Render. Re-upload so the URL
              becomes <code>https://res.cloudinary.com/…</code> (create unsigned preset{' '}
              <code>hvacexitadvisors_blog</code> in Cloudinary if needed).
            </p>
          ) : null}
        </div>
      </div>
    </fieldset>
  );
}
