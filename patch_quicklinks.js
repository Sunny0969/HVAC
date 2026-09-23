const fs = require('fs');

const path = 'src/views/components/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

const startMarker = "{/* Quick Links */}";
const endMarker = "{/* Areas We Serve */}";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newQuickLinks = `{/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sell-your-hvac-business" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1.5">
                  Sell your HVAC Business
                </Link>
              </li>
              <li>
                <Link href="/buy-an-hvac-business" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1.5">
                  Buy an HVAC Business
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1.5">
                  Business for sale
                </Link>
              </li>
              <li>
                <Link href="/hvac-business-valuation" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1.5">
                  HVAC business valuation
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1.5">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white/80 hover:text-secondary transition-colors text-sm block py-1.5">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          `;
  
  content = content.substring(0, startIndex) + newQuickLinks + content.substring(endIndex);
  fs.writeFileSync(path, content);
  console.log("Replaced Quick Links layout successfully.");
} else {
  console.log("Could not find markers.");
}
