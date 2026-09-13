const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  author: String,
  authorRole: String,
  date: Date,
  category: String,
  image: String,
  seoTitle: String,
  seoDescription: String,
  faqs: Array,
  seo: Object
}, { strict: false });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");
  
  let blog = await Blog.findOne({ slug: 'hvac-business-in-florida' });
  if (blog) {
    console.log("Found blog:", blog.title);
    
    // Fix diamond characters
    blog.content = blog.content.replace(/\uFFFD/g, '-');
    blog.content = blog.content.replace(//g, '-');
    
    // Update Author
    blog.author = "Sanjay Wadhwani";
    blog.authorRole = "HVAC Brokerage Expert";
    
    // Update SEO Data
    blog.seoTitle = "Florida HVAC Business Guide: Requirements & Costs 2026";
    blog.seoDescription = "Learn the exact licensing requirements, startup costs, owner salaries, and valuation multiples for Florida HVAC businesses in 2026.";
    blog.title = "Florida HVAC Business Requirements, Costs, Pay & Businesses for Sale";
    
    // Inject Audience/Use Case Box if not present
    if (!blog.content.includes('Executive Summary & Target Audience')) {
      const summaryHTML = `
<div class="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 not-prose">
  <h2 class="text-xl font-bold text-[#022B3A] mb-3">Executive Summary & Target Audience</h2>
  <ul class="space-y-2 text-gray-700 font-medium text-sm mb-4 list-disc pl-5">
    <li><strong>Target Audience:</strong> Prospective business buyers, HVAC technicians, and private equity investors.</li>
    <li><strong>Industry:</strong> HVAC / Mechanical Contracting in Florida.</li>
    <li><strong>Primary Use Case:</strong> Complete roadmap for starting, licensing, or acquiring a mechanical contracting operation.</li>
    <li><strong>Decision Context:</strong> Evaluating startup costs, licensing timelines, and market profitability.</li>
  </ul>
  <p class="text-sm font-bold text-[#EE5B2C] border-t border-blue-200 pt-3">Key Takeaway: A DBPR Class A or B license requires 4 years of experience, and startup costs range from $15k to $200k+ depending on scale.</p>
</div>
`;
      blog.content = summaryHTML + blog.content;
    }

    // Inject Internal and External Links if not present
    if (!blog.content.includes('/resources/florida-hvac-industry-guide')) {
        blog.content = blog.content.replace(
            'High run-hours mean shorter lifespans and endless replacement cycles.',
            'High run-hours mean shorter lifespans and endless replacement cycles. For a deeper dive into market demand, see our <a href="/resources/florida-hvac-industry-guide">Ultimate Guide to the Florida HVAC Industry</a>.'
        );
    }
    if (!blog.content.includes('/resources/hvac-business-multiples-explained')) {
        blog.content = blog.content.replace(
            'trade somewhere between 2x and 4x SDE',
            '<a href="/resources/hvac-business-multiples-explained">trade somewhere between 2x and 4x SDE</a>'
        );
    }
    if (!blog.content.includes('/buy-an-hvac-business')) {
        blog.content = blog.content.replace(
            'Buying an existing, cash-flowing HVAC business',
            '<a href="/buy-an-hvac-business">Buying an existing, cash-flowing HVAC business</a>'
        );
    }
    if (!blog.content.includes('/sell-your-hvac-business')) {
        blog.content = blog.content.replace(
            'sellers require all-cash buyers',
            '<a href="/sell-your-hvac-business">sellers</a> require all-cash buyers'
        );
    }
    if (!blog.content.includes('/free-valuation')) {
        blog.content += `
<div class="mt-10 p-8 bg-[#022B3A] text-white rounded-2xl text-center not-prose">
    <h3 class="text-2xl font-black mb-4">Want to Know Your HVAC Business's True Worth?</h3>
    <p class="mb-6 font-medium text-white/80">Get a confidential, professional estimate based on current Florida market multiples.</p>
    <a href="/free-valuation" class="inline-block px-8 py-4 bg-[#EE5B2C] text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">Get a Free Valuation</a>
</div>`;
    }
    
    // External link
    if (!blog.content.includes('leg.state.fl.us')) {
        blog.content = blog.content.replace(
            'DBPR Class A or B mechanical contractor license under F.S. 489',
            'DBPR Class A or B mechanical contractor license under <a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/0489.html" target="_blank" rel="noopener noreferrer">F.S. 489</a>'
        );
    }
    
    // Convert long paragraphs to smaller chunks (simple heuristic)
    // We will just do a few manual breaks or leave it since it's mostly bulleted.
    
    await blog.save();
    console.log("Blog updated successfully.");
  } else {
    console.log("Blog not found.");
  }
  
  process.exit(0);
}

run();
