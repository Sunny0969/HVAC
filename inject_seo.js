const fs = require('fs');
let code = fs.readFileSync('src/views/components/SellPageContent.tsx', 'utf8');

const injection = `
      {/* Block 10: SEO Keywords Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 border-t border-gray-200 pt-12"
      >
        <h2 className="text-3xl font-black text-[#022B3A] mb-4">Sell My Company Fast & Maximize Returns</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Owners frequently ask us, "How can I <strong>sell my company fast</strong> without leaving money on the table?" When you need to <strong>sell my business quickly</strong>, our tailored approach connects you exclusively with pre-funded buyers. Whether you want to <strong>sell my business fast</strong> due to retirement or relocation, we handle the entire process safely.
        </p>

        <h2 className="text-2xl font-bold text-[#022B3A] mb-4">How Much Can I Sell My Business For?</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          The core question of any exit is "<strong>how much can I sell my business for</strong>?" By using our <Link href="/resources/real-number-evaluating-hvac" className="text-[#EE5B2C] font-bold hover:underline">HVAC valuation resources</Link>, you can learn how SDE and EBITDA dictate pricing. Our free valuation gives you a realistic, data-driven answer so you don't guess the value of your life's work.
        </p>

        <h2 className="text-2xl font-bold text-[#022B3A] mb-4">Family Business Exit Strategy & Business Succession</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Planning a <strong>family business exit strategy</strong> requires preserving your legacy. If you are exploring internal <strong>business succession</strong> or seeking a third-party acquisition, our brokers guide you through the intricacies to ensure your employees and family are protected.
        </p>

        <h2 className="text-2xl font-bold text-[#022B3A] mb-4">Buy and Sell Business Market</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Navigating the <strong>buy and sell business</strong> landscape can be complex. Some owners attempt to <strong>sell my business online</strong> or look for ways to <strong>sell my business for free</strong> on generic listing sites. However, to safely manage the <strong>sale of a business</strong> (or "<strong>sale a business</strong>"), you need a broker who uses confidential <Link href="/listings" className="text-[#EE5B2C] font-bold hover:underline">blind profiles</Link>. Whether you intend to <strong>buy or sell business</strong> assets, professional representation prevents competitors from learning your trade secrets while securing the highest possible offer. If you want to know <strong>how to sell a business quickly</strong>, trust Florida's premier HVAC specialists.
        </p>
      </motion.div>
`;

code = code.replace(
  /(\s*){\/\* Right Sticky Form Column \*\/}/,
  `$1${injection}$1{/* Right Sticky Form Column */}`
);

fs.writeFileSync('src/views/components/SellPageContent.tsx', code, 'utf8');
