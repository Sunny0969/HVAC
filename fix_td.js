const fs = require('fs');
const path = 'src/admin/AdminLeads.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /<td>\s*\{lead\.pageUrl \? \([\s\S]*?\) : \([\s\S]*?\)\}\s*<\/td>/;

const visitorInfoTd = `<td>
                    {lead.extra && Object.keys(lead.extra).length > 0 ? (
                      <div style={{fontSize: '0.85em', color: '#999', lineHeight: '1.4'}}>
                        {lead.extra.capturedLocation && <div><strong style={{color: '#fff'}}>Loc:</strong> {lead.extra.capturedLocation}</div>}
                        {lead.extra.deviceType && <div><strong style={{color: '#fff'}}>Device:</strong> {lead.extra.deviceType}</div>}
                        {lead.extra.userAgent && <div style={{fontSize: '0.8em', opacity: 0.7, marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px'}} title={lead.extra.userAgent}>{lead.extra.userAgent}</div>}
                      </div>
                    ) : (
                      <span className="admin-muted">N/A</span>
                    )}
                  </td>`;

content = content.replace(regex, visitorInfoTd);
fs.writeFileSync(path, content);
console.log("Replaced Page URL cell properly");
