const fs = require('fs');

const path = 'src/admin/AdminLeads.tsx';
let content = fs.readFileSync(path, 'utf8');

// For the whatsapp table, add a new column for "Visitor Info" (where extra info goes)
content = content.replace(
  '<th>Page URL</th>',
  '<th>Page URL</th>\n                <th>Visitor Info</th>'
);

content = content.replace(
  /<td>\s*\{\s*lead\.pageUrl \? \([\s\S]*?\) : \(\s*'\?"'\s*\)\s*\}\s*<\/td>/,
  `$&
                  <td>
                    {lead.extra && Object.keys(lead.extra).length > 0 ? (
                      <div style={{fontSize: '0.85em', color: '#666'}}>
                        {lead.extra.capturedLocation && <div><strong>Loc:</strong> {lead.extra.capturedLocation}</div>}
                        {lead.extra.deviceType && <div><strong>Device:</strong> {lead.extra.deviceType}</div>}
                      </div>
                    ) : '?"'}
                  </td>`
);

fs.writeFileSync(path, content);
console.log("Updated WhatsApp table to show Visitor Info");
