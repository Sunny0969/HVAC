const fs = require('fs');

const path = 'src/admin/AdminLeads.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove <th>Page URL</th> and <th>Visitor Info</th> (if it exists) to start clean
content = content.replace(/<th>Page URL<\/th>/g, '');
content = content.replace(/<th>Visitor Info<\/th>/g, '');

// 2. Add <th>Visitor Info</th> exactly after <th>Location (page)</th> in whatsapp table
content = content.replace(
  /<th>Location \(page\)<\/th>\s*<th \/>/g,
  '<th>Location (page)</th>\n                <th>Visitor Info</th>\n                <th />'
);

// 3. Replace the pageUrl <td> block completely with Visitor Info <td> block
const pageUrlTdRegex = /<td>\s*\{lead\.pageUrl \? \(\s*<a href=\{lead\.pageUrl\} target="_blank" rel="noreferrer">\s*Open page\s*<\/a>\s*\) : \(\s*'\?"'\s*\)\}\s*<\/td>/;

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

content = content.replace(pageUrlTdRegex, visitorInfoTd);

fs.writeFileSync(path, content);
console.log("Updated AdminLeads.tsx to correctly remove Page URL and add Visitor Info");
