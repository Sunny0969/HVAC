const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

code = code.replace(
  '<p className="text-xl text-secondary font-semibold">The HVAC Brokerage Advantage</p>',
  `<p className="text-xl text-secondary font-semibold mb-2">The HVAC Brokerage Advantage</p>
  <p className="text-gray-700 font-medium mb-4"><strong>Short Answer:</strong> Because we exclusively focus on the mechanical contracting industry, yielding higher multiples and smoother transitions than generalists.</p>`
);

code = code.replace(
  '<h2 className="text-3xl font-black text-[#022B3A] text-center xl:text-left mb-10">Why Choose Us vs. Traditional Brokers?</h2>',
  `<h2 className="text-3xl font-black text-[#022B3A] text-center xl:text-left mb-4">Why Choose Us vs. Traditional Brokers?</h2>
  <p className="text-gray-700 font-medium mb-6"><strong>Short Answer:</strong> We understand technical metrics like PMAs and tech retention, allowing us to attract strategic buyers that pay top dollar.</p>`
);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
