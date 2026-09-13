const fs = require('fs');

// 1. Fix Layout in page.tsx
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// The layout right now is:
/*
      {/* 4. Merged: Why Sell With Us + Comparison Table *}
      <section className="w-full bg-[#F7F5F0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col xl:flex-row gap-12 xl:gap-8 items-start">
          
          <div className="w-full xl:w-[50%]">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-4 tracking-tight">Why Sell With Us?</h2>
              <p className="text-xl text-secondary font-semibold mb-2">The HVAC Brokerage Advantage</p>
              <p className="text-gray-700 font-medium mb-4"><strong>Short Answer:</strong> Because we exclusively focus on the mechanical contracting industry, yielding higher multiples and smoother transitions than generalists.</p>
            </div>
            <Colonnade items={differentiators} />
          </div>

          <div className="w-full xl:w-[50%] xl:mt-0 mt-12">
            <h2 className="text-3xl font-black text-[#022B3A] text-center xl:text-left mb-4">Why Choose Us vs. Traditional Brokers?</h2>
            <p className="text-gray-700 font-medium mb-6"><strong>Short Answer:</strong> We understand technical metrics like PMAs and tech retention, allowing us to attract strategic buyers that pay top dollar.</p>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
              ...
            </div>
          </div>

        </div>
      </section>
*/

code = code.replace(
  '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col xl:flex-row gap-12 xl:gap-8 items-start">',
  '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col gap-24 items-center">'
);

code = code.replace(
  '<div className="w-full xl:w-[50%]">',
  '<div className="w-full">'
);

code = code.replace(
  '<div className="w-full xl:w-[50%] xl:mt-0 mt-12">',
  '<div className="w-full">'
);

// Optional: Center the text in the "Why Choose Us vs..." section since it's now full width.
code = code.replace(
  '<h2 className="text-3xl font-black text-[#022B3A] text-center xl:text-left mb-4">Why Choose Us vs. Traditional Brokers?</h2>',
  '<h2 className="text-4xl md:text-5xl font-black text-[#022B3A] text-center mb-6">Why Choose Us vs. Traditional Brokers?</h2>'
);
code = code.replace(
  '<p className="text-gray-700 font-medium mb-6"><strong>Short Answer:</strong> We understand technical metrics',
  '<p className="text-gray-700 font-medium mb-12 text-center max-w-4xl mx-auto text-lg"><strong>Short Answer:</strong> We understand technical metrics'
);

// Center the "Why Sell With Us" text
code = code.replace(
  '<div className="mb-8 text-center md:text-left">',
  '<div className="mb-12 text-center">'
);
code = code.replace(
  '<p className="text-gray-700 font-medium mb-4"><strong>Short Answer:</strong> Because we exclusively',
  '<p className="text-gray-700 font-medium mb-4 max-w-4xl mx-auto text-lg"><strong>Short Answer:</strong> Because we exclusively'
);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');

// 2. Fix Testimonials Image
let testCode = fs.readFileSync('src/views/components/TestimonialSlider.tsx', 'utf8');

// Replace Image component with standard img for the card image
testCode = testCode.replace(
  /<Image \s*\n\s*src=\{getCardImage\(item\.id\)\}\s*\n\s*alt="Business Transition"\s*\n\s*fill\s*\n\s*className="object-cover group-hover:scale-105 transition-transform duration-700"\s*\n\s*\/>/g,
  '<img src={getCardImage(item.id)} alt="Business Transition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />'
);

// Replace Image component with standard img for avatar
testCode = testCode.replace(
  /<Image \s*\n\s*src=\{item\.image \|\| getAvatar\(item\.title, item\.id\)\}\s*\n\s*alt=\{item\.title\}\s*\n\s*fill\s*\n\s*className="object-cover"\s*\n\s*\/>/g,
  '<img src={item.image || getAvatar(item.title, item.id)} alt={item.title} className="w-full h-full object-cover" />'
);

fs.writeFileSync('src/views/components/TestimonialSlider.tsx', testCode, 'utf8');
