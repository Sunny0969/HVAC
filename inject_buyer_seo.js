const fs = require('fs');
let code = fs.readFileSync('src/views/components/BuyPageContent.tsx', 'utf8');

const injection = `
      {/* Block 9: SEO Keywords Section for Buyers */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 border-t border-gray-200 pt-12"
      >
        <h2 className="text-3xl font-black text-[#022B3A] mb-4">Are You a Business Buyer Looking to Buy an Existing Business?</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Every serious <strong>business buyer</strong> eventually discovers that deciding to <strong>buy an existing business</strong> is often more profitable than starting from scratch. When you are <strong>buying businesses</strong> in the Florida HVAC sector, you immediately gain trained technicians, established vendor accounts, and active customer maintenance agreements. If you want to safely <strong>purchase a business</strong> with verified cash flow, our <Link href="/listings" className="text-[#EE5B2C] font-bold hover:underline">premium listings</Link> are your starting point.
        </p>

        <h2 className="text-2xl font-bold text-[#022B3A] mb-4">Where to Buy a Business & Find Small Businesses to Buy</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          A common question from investors is "<strong>where to buy a business</strong> safely?" While there are many general brokers, finding the right <strong>small businesses to buy</strong> requires industry expertise. Whether you are looking for a single <strong>business to buy</strong> to become an owner-operator, or multiple <strong>businesses to buy</strong> for a private equity roll-up, HVAC Exit Advisors provides Florida's most vetted portfolio.
        </p>

        <h2 className="text-2xl font-bold text-[#022B3A] mb-4">Can You Buy a Business Online or Buy a Business Cheap?</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Many aspiring entrepreneurs attempt to <strong>buy a business online</strong> through public bulletin boards, searching for ways to <strong>buy a business cheap</strong>. Unfortunately, public <strong>online businesses to buy</strong> often suffer from unverified financials or hidden liabilities. Quality HVAC acquisitions are rarely "cheap," but they offer incredible return on investment. We help you source fairly priced, highly profitable companies rather than risky discount deals.
        </p>

        <h2 className="text-2xl font-bold text-[#022B3A] mb-4">How to Value a Business to Buy & Sell or Buy a Business Effectively</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Before you commit capital, you must know <strong>how to value a business to buy</strong>. We guide you through analyzing Seller's Discretionary Earnings (SDE), reviewing add-backs, and assessing fleet condition using our <Link href="/resources" className="text-[#EE5B2C] font-bold hover:underline">market trend resources</Link>. Ultimately, whether you plan to <strong>sell or buy a business</strong>, professional brokerage ensures a seamless transition. If you are ready to <strong>buy business</strong> assets with confidence, contact our advisory team today.
        </p>
      </motion.div>
`;

code = code.replace(
  /(\s*){\/\* Right Sticky Form Column \(Reusing the requested layout\) \*\/}/,
  `$1${injection}$1{/* Right Sticky Form Column (Reusing the requested layout) */}`
);

fs.writeFileSync('src/views/components/BuyPageContent.tsx', code, 'utf8');
