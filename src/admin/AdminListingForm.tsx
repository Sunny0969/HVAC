import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createListing, getListing, updateListing, type AdminListing } from './api';
import AdminImageField from './AdminImageField';
import BlogEditor from './BlogEditor';

export default function AdminListingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id || id === 'new';

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(!isNew);

  const [form, setForm] = useState<Partial<AdminListing>>({
    title: '',
    slug: '',
    status: 'Draft',
    location: '',
    industry: 'HVAC Businesses',
    askingPrice: 0,
    revenue: 0,
    cashFlow: 0,
    ebitda: 0,
    description: '',
    realEstate: '',
    ffe: '',
    inventory: '',
    employees: '',
    yearEstablished: '',
    reasonSelling: '',
    supportTraining: '',
    marketCompetition: '',
    coverImage: '',
    coverImageAlt: '',
    faqs: [],
    seo: { metaTitle: '', metaDescription: '' },
  });

  useEffect(() => {
    if (isNew) return;
    let active = true;
    getListing(id)
      .then((data) => {
        if (!active) return;
        setForm({
          ...data,
          faqs: data.faqs || [],
          seo: data.seo || { metaTitle: '', metaDescription: '' },
        });
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : 'Load failed');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id, isNew]);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title) return alert('Title is required');
    setSaving(true);
    setError('');
    try {
      if (isNew) {
        await createListing(form);
      } else {
        await updateListing(id, form);
      }
      navigate('/listings');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const addFaq = () => {
    setForm({ ...form, faqs: [...(form.faqs || []), { question: '', answer: '' }] });
  };
  const updateFaq = (idx: number, field: 'question' | 'answer', val: string) => {
    const arr = [...(form.faqs || [])];
    arr[idx] = { ...arr[idx], [field]: val };
    setForm({ ...form, faqs: arr });
  };
  const removeFaq = (idx: number) => {
    const arr = [...(form.faqs || [])];
    arr.splice(idx, 1);
    setForm({ ...form, faqs: arr });
  };

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>{isNew ? 'New Listing' : 'Edit Listing'}</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="button" className="admin-btn admin-btn-secondary" onClick={() => navigate('/listings')}>
            Cancel
          </button>
          <button type="button" className="admin-btn" onClick={onSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save Listing'}
          </button>
        </div>
      </div>
      {error && <div className="admin-error">{error}</div>}

      <div className="admin-blog-form-grid">
        <div className="admin-blog-main">
          <label className="admin-field">
            <span>Listing Title</span>
            <input
              value={form.title || ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </label>

          <label className="admin-field">
            <span>Description</span>
            <div style={{ minHeight: '300px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <BlogEditor
                value={form.description || ''}
                onChange={(html) => setForm({ ...form, description: html })}
              />
            </div>
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <label className="admin-field">
              <span>Real Estate</span>
              <input value={form.realEstate || ''} onChange={(e) => setForm({ ...form, realEstate: e.target.value })} />
            </label>
            <label className="admin-field">
              <span>FF&E</span>
              <input value={form.ffe || ''} onChange={(e) => setForm({ ...form, ffe: e.target.value })} />
            </label>
            <label className="admin-field">
              <span>Inventory</span>
              <input value={form.inventory || ''} onChange={(e) => setForm({ ...form, inventory: e.target.value })} />
            </label>
            <label className="admin-field">
              <span>Employees</span>
              <input value={form.employees || ''} onChange={(e) => setForm({ ...form, employees: e.target.value })} />
            </label>
            <label className="admin-field">
              <span>Year Established</span>
              <input value={form.yearEstablished || ''} onChange={(e) => setForm({ ...form, yearEstablished: e.target.value })} />
            </label>
          </div>

          <label className="admin-field" style={{ marginTop: '1rem' }}>
            <span>Reason for Selling</span>
            <textarea rows={2} value={form.reasonSelling || ''} onChange={(e) => setForm({ ...form, reasonSelling: e.target.value })} />
          </label>
          <label className="admin-field">
            <span>Support & Training</span>
            <textarea rows={2} value={form.supportTraining || ''} onChange={(e) => setForm({ ...form, supportTraining: e.target.value })} />
          </label>
          <label className="admin-field">
            <span>Market & Competition</span>
            <textarea rows={2} value={form.marketCompetition || ''} onChange={(e) => setForm({ ...form, marketCompetition: e.target.value })} />
          </label>

          <fieldset className="admin-fieldset">
            <legend>FAQs (Optional)</legend>
            {(form.faqs || []).map((faq, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <input
                    placeholder="Question"
                    value={faq.question || ''}
                    onChange={(e) => updateFaq(i, 'question', e.target.value)}
                    style={{ marginBottom: '0.5rem', width: '100%', padding: '0.5rem', border: '1px solid #ddd' }}
                  />
                  <textarea
                    placeholder="Answer"
                    rows={2}
                    value={faq.answer || ''}
                    onChange={(e) => updateFaq(i, 'answer', e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd' }}
                  />
                </div>
                <button type="button" className="admin-link-danger" onClick={() => removeFaq(i)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className="admin-btn admin-btn-secondary" onClick={addFaq}>
              + Add FAQ
            </button>
          </fieldset>
        </div>

        <div className="admin-blog-sidebar">
          <label className="admin-field">
            <span>Status</span>
            <select
              value={form.status || 'Draft'}
              onChange={(e) => setForm({ ...form, status: e.target.value as any })}
            >
              <option value="Draft">Draft</option>
              <option value="Active">Active</option>
              <option value="Under Contract">Under Contract</option>
              <option value="Sold">Sold</option>
            </select>
          </label>
          <label className="admin-field">
            <span>Location (e.g., Baltimore, MD)</span>
            <input value={form.location || ''} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          </label>
          <label className="admin-field">
            <span>Industry</span>
            <input value={form.industry || ''} onChange={(e) => setForm({ ...form, industry: e.target.value })} />
          </label>
          <label className="admin-field">
            <span>Asking Price ($)</span>
            <input type="number" value={form.askingPrice || 0} onChange={(e) => setForm({ ...form, askingPrice: Number(e.target.value) })} />
          </label>
          <label className="admin-field">
            <span>Revenue ($)</span>
            <input type="number" value={form.revenue || 0} onChange={(e) => setForm({ ...form, revenue: Number(e.target.value) })} />
          </label>
          <label className="admin-field">
            <span>Cash Flow ($)</span>
            <input type="number" value={form.cashFlow || 0} onChange={(e) => setForm({ ...form, cashFlow: Number(e.target.value) })} />
          </label>
          <label className="admin-field">
            <span>EBITDA ($)</span>
            <input type="number" value={form.ebitda || 0} onChange={(e) => setForm({ ...form, ebitda: Number(e.target.value) })} />
          </label>
          <label className="admin-field">
            <span>URL Slug (Leave blank to auto-generate)</span>
            <input value={form.slug || ''} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          </label>

          <AdminImageField
            label="Cover Image"
            url={form.coverImage || ''}
            alt={form.coverImageAlt || ''}
            onUrlChange={(url) => setForm({ ...form, coverImage: url })}
            onAltChange={(alt) => setForm({ ...form, coverImageAlt: alt })}
          />

          <fieldset className="admin-fieldset" style={{ marginTop: '2rem' }}>
            <legend>SEO Overrides</legend>
            <label className="admin-field">
              <span>Meta Title</span>
              <input
                value={form.seo?.metaTitle || ''}
                onChange={(e) => setForm({ ...form, seo: { ...form.seo, metaTitle: e.target.value } })}
              />
            </label>
            <label className="admin-field">
              <span>Meta Description</span>
              <textarea
                rows={3}
                value={form.seo?.metaDescription || ''}
                onChange={(e) => setForm({ ...form, seo: { ...form.seo, metaDescription: e.target.value } })}
              />
            </label>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
