const fs = require('fs');

const path = 'src/views/components/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

// The section to replace:
// {/* Areas We Serve */}
// <div className="col-span-1 md:col-span-2">
// ...
// </div>
// </div>

const startMarker = "{/* Areas We Serve */}";
const endMarker = "</div>\n\n        {/* Website Disclaimer */}";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newCols = `{/* Areas We Serve */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Areas We Serve (Florida)</h3>
            <ul className="space-y-2">
              <li><Link href="/south-florida" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">South Florida</Link></li>
              <li><Link href="/southwest-florida" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">Southwest Florida</Link></li>
              <li><Link href="/central-florida" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">Central Florida</Link></li>
              <li><Link href="/tampa-bay" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">Tampa Bay</Link></li>
              <li><Link href="/atlantic-coast" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">Atlantic Coast</Link></li>
              <li><Link href="/gulf-coast" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">Gulf Coast</Link></li>
              <li><Link href="/north-florida" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1">North Florida</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="py-1">Residential HVAC</li>
              <li className="py-1">Commercial HVAC</li>
              <li className="py-1">Heating & Air-Conditioning</li>
              <li className="py-1">Refrigeration</li>
              <li className="py-1">Mechanical Services</li>
              <li className="py-1">Indoor Air Quality</li>
            </ul>
          </div>
        `;
        
  content = content.substring(0, startIndex) + newCols + "\n" + content.substring(endIndex);
  
  // also change col-span-1 md:col-span-2 to just default, but I completely replaced it.
  fs.writeFileSync(path, content);
  console.log("Replaced Footer layout successfully.");
} else {
  console.log("Could not find markers.");
}
