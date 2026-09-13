import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true, trim: true },
  answer: { type: String, required: true, trim: true },
}, { _id: true });

const seoSchema = new mongoose.Schema({
  metaTitle: { type: String, default: '', trim: true },
  metaDescription: { type: String, default: '', trim: true },
  ogImage: { type: String, default: '', trim: true },
  ogImageAlt: { type: String, default: '', trim: true },
  canonicalUrl: { type: String, default: '', trim: true },
  schemaType: { type: String, default: 'BlogPosting' },
}, { _id: false });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, default: '' },
  content: { type: String, default: '' },
  coverImage: { type: String, default: '' },
  coverImageAlt: { type: String, default: '' },
  tags: { type: [String], default: [] },
  faqs: { type: [faqSchema], default: [] },
  seo: { type: seoSchema, default: () => ({}) },
  status: { type: String, default: 'draft' },
  publishedAt: { type: Date, default: null },
  author: { type: String, default: 'HVAC Exit Advisors' },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

const htmlContent = `
<p><strong>Quick answer:</strong> An HVAC business in Florida needs a state-issued DBPR mechanical contractor license (Class A or B), typically $15,000�$60,000 to launch depending on scale, and runs on a near year-round cooling season that keeps demand steady. Owners of established Florida HVAC companies commonly report $150,000�$800,000+ in annual seller's discretionary earnings, and used HVAC businesses across the state currently list anywhere from $125,000 for a small solo operation to several million dollars for multi-crew commercial shops.</p>

<p>That's the short version. Below is the long one � the licensing path, the real numbers behind cost and pay, and where to actually <a href="/listings">find an HVAC business for sale</a> in Tampa, Miami, Jacksonville, and the rest of Florida.</p>

<h2 id="overview" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida: A Quick Overview</h2>
<p>Florida is one of the most active HVAC markets in the country, and not by accident. Air conditioning isn't a seasonal convenience here � in most of the state it runs eight to ten months a year, and in South Florida it barely stops at all. That single fact shapes almost everything else about the industry: shorter equipment lifespans, a steady replacement cycle, hurricane-driven repair spikes, and a customer base that's already used to paying for annual maintenance agreements.</p>
<p>It also means the state regulates HVAC work more tightly than most. Florida requires a state-level mechanical contractor license through the Department of Business and Professional Regulation (DBPR) � a county competency card alone won't let you legally install or repair a central system. Add in Miami-Dade and Broward's hurricane-zone building codes, Florida's real-property sales tax treatment of HVAC materials, and a one-employee workers' comp threshold for construction-classified trades, and you end up with a market that rewards contractors who get the paperwork right just as much as the ones who do good technical work.</p>
<p>Whether you're planning to start one from scratch, <a href="/buy-an-hvac-business">buy an existing shop</a>, or <a href="/sell-your-hvac-business">sell the one you've built</a>, the rest of this guide walks through what actually matters.</p>

<h2 id="how-to-start" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">How to Start a HVAC Business in Florida</h2>
<p>Starting an HVAC business in Florida generally follows this order:</p>
<ol>
  <li><strong>Bank four years of documented HVAC experience.</strong> Florida Statute 489.111 requires this before you're even eligible to sit for the state licensing exams. Work under a licensed contractor, military HVAC service, an accredited trade program, or verified out-of-state experience can all count.</li>
  <li><strong>Pass the two CILB exams.</strong> The Trade Knowledge exam (7.5 hours for a Class A license, 5 hours for Class B) and the Business and Finance exam (6.5 hours), each requiring a 70% score.</li>
  <li><strong>Get EPA Section 608 Universal certification.</strong> This is a federal requirement, not a state one, and it's good for life once you have it.</li>
  <li><strong>Form your business entity.</strong> Most Florida HVAC contractors set up an LLC through Sunbiz � $125 to file, a few days of processing.</li>
  <li><strong>Apply for your DBPR Class A or B mechanical contractor license.</strong> This is where your exam scores, experience verification, insurance certificates, and financial responsibility documentation all come together.</li>
  <li><strong>Set up workers' comp, general liability, and commercial auto coverage</strong>, and register for Florida sales tax before your first job.</li>
  <li><strong>Pull your Local Business Tax Receipt</strong> from whichever county (and city, if applicable) you'll be working in.</li>
</ol>
<p>Most people move through this in six to twelve months once the four-year experience requirement is already satisfied � the exams, entity formation, and licensing paperwork themselves usually take a few months if nothing gets kicked back for missing documentation.</p>

<h2 id="what-you-need" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">What Do You Need to Start an HVAC Business in Florida?</h2>
<p>Beyond the license itself, a realistic HVAC startup checklist looks like this:</p>
<ul>
  <li><strong>Capital.</strong> A solo, service-only operation can get off the ground for roughly $15,000�$30,000. A full install-and-service business running one or two crews typically needs $30,000�$60,000, and a multi-crew commercial operation can run $75,000�$200,000 or more once you factor in a fleet, a sheet metal shop, and a staffed office.</li>
  <li><strong>A vehicle and basic tools.</strong> At minimum, a reliable service van and a set of gauges, a recovery unit, and a vacuum pump. Install work adds brazing equipment, sheet metal tools, and hoists.</li>
  <li><strong>Insurance.</strong> General liability (commercial clients will usually expect $1M/$2M in coverage, even though the state minimum is lower), commercial auto, and workers' comp the moment you hire anyone.</li>
  <li><strong>Financial responsibility proof.</strong> DBPR wants either a FICO score of 660 or higher, or a surety bond, before it will issue your license.</li>
  <li><strong>A way to get found.</strong> A Google Business Profile and a basic website are the minimum; most successful Florida HVAC businesses also run paid search and referral programs from day one.</li>
  <li><strong>A plan for maintenance agreements.</strong> Florida customers are already conditioned to sign annual or twice-yearly service contracts � building this into your model from the start creates recurring revenue that smooths out the slow months.</li>
</ul>

<h2 id="requirements" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">Requirements to Start HVAC Business in Florida</h2>
<p>On the regulatory side specifically, here's what's actually mandatory rather than just recommended:</p>
<ul>
  <li><strong>DBPR Class A or B mechanical contractor license</strong> under F.S. 489, requiring 4 years of documented experience and passing both CILB exams.</li>
  <li><strong>EPA Section 608 Universal certification</strong>, federally required under 40 CFR Part 82.</li>
  <li><strong>A registered business entity</strong> (LLC, in most cases) filed through Sunbiz, with a Florida-based registered agent.</li>
  <li><strong>General liability insurance</strong>, submitted as part of the license application.</li>
  <li><strong>Financial responsibility documentation</strong> � FICO 660+ or a surety bond ($5,000 with a 14-hour course, or $10,000 without).</li>
  <li><strong>Workers' compensation coverage</strong> the moment you have one employee, since HVAC is a construction-classified trade in Florida.</li>
  <li><strong>Florida sales tax registration</strong>, since HVAC contractors are responsible for tax on materials even though they don't charge customers sales tax on central-system labor.</li>
  <li><strong>A Local Business Tax Receipt</strong> from each county (and city, where applicable) where you regularly work.</li>
  <li><strong>Compliance with the Florida Building Code, Mechanical (FBC-M)</strong> on every job, with added Miami-Dade NOA product approval requirements if you work inside the High-Velocity Hurricane Zone.</li>
  <li><strong>14 hours of continuing education every two years</strong> to keep the license active.</li>
</ul>

<h2 id="startup-costs" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida Cost: What It Actually Takes to Get Started</h2>
<p>Licensing alone runs somewhere between $600 and $1,500 once you add up exam fees, registration, the application itself, and your EPA certification. From there, total startup cost depends heavily on how big an operation you're building:</p>
<ul>
  <li><strong>Solo, service-only (no install capacity):</strong> $15,000�$30,000</li>
  <li><strong>Full-service residential (1�2 crews):</strong> $30,000�$60,000</li>
  <li><strong>Multi-crew commercial operation:</strong> $75,000�$200,000+</li>
</ul>
<p>The biggest cost swings come from vehicles, tools, and insurance � a single outfitted service van can run $5,000�$10,000 used, while a small commercial fleet of three to five vehicles pushes into the tens of thousands. Workers' comp is the other line item that surprises new owners: because HVAC is construction-classified, that cost shows up as soon as you hire your first helper, not once you cross four employees like most other trades.</p>

<h2 id="owner-pay" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">How Much Do HVAC Business Owners Make in Florida?</h2>
<p>This is where the numbers get genuinely encouraging, and it's a big part of why Florida HVAC businesses trade hands at healthy valuations. Based on current listings across the state, established Florida HVAC companies commonly report seller's discretionary earnings (SDE) � essentially the owner's total financial benefit from the business � ranging from roughly $75,000 for small, owner-operator shops up to $800,000 or more for larger commercial operations with multiple crews and long-term contracts. Mid-sized, well-run residential and commercial shops most often land somewhere in the $150,000�$450,000 range.</p>
<p>A few things drive that spread:</p>
<ul>
  <li><strong>Commercial mix.</strong> Businesses with 70%+ commercial or government contract revenue tend to post higher and steadier cash flow than pure residential shops.</li>
  <li><strong>Age and reputation.</strong> Companies with 20+ years in a market typically carry lower customer acquisition costs and higher margins.</li>
  <li><strong>Maintenance agreements.</strong> Recurring service contracts smooth out the seasonal swings that hit pure repair-and-install shops.</li>
  <li><strong>Storm exposure.</strong> In hurricane-active years, contractors with strong insurance-adjuster relationships can see a meaningful share of annual revenue � sometimes a quarter to nearly half � come from post-storm replacement work alone.</li>
</ul>

<h2 id="pay-details" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida Pay: What Owners, Technicians, and Crews Earn</h2>
<p>It helps to separate owner earnings from technician wages, since they're driven by different things.</p>
<p><strong>Technicians:</strong> Florida's HVAC technicians earned a median annual wage of about $56,670 as of May 2025, according to the U.S. Bureau of Labor Statistics � with the middle 80% of the field earning somewhere between roughly $38,370 and $78,210 depending on experience, certification, and specialty. The state employs close to 40,000 HVAC mechanics and installers, and BLS projects continued job growth in the years ahead.</p>
<p><strong>Owners:</strong> Owner income looks very different from a W-2 technician's paycheck, since it usually combines a salary with the business's discretionary earnings. A solo owner-operator running their own service calls might draw $60,000�$100,000 in personal income on top of reinvesting profit into the business. Owners of established, multi-technician shops frequently see total compensation � salary plus SDE � well into six figures, and the highest-performing commercial operations can clear seven figures in combined owner benefit and profit.</p>
<p><strong>Crew leads and installers:</strong> Experienced lead installers and service managers in Florida's larger metro markets often out-earn the state median significantly, particularly when compensation includes commission on install sales or maintenance agreement signups.</p>

<h2 id="sunshine-case" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">Sunshine: A Plumbing and HVAC Business in Florida</h2>
<p>If you've come across the name "Sunshine" while researching Florida HVAC and plumbing companies, you're not imagining things � there are several different businesses operating under some version of that name across the state, and it's worth knowing they're not all the same company. Sunshine Plumbing and Gas, a Gainesville and Ocala-area business with nearly two decades of history, rebranded as Sunshine Services after acquiring North Central Florida Air Conditioning and expanding into full HVAC service. Separately, Sunshine Air and Plumbing operates in Central Florida, and Sunshine Plumbers serves the Hollywood, Florida area � distinct, unrelated businesses that happen to share a name that clearly resonates in a state that markets itself on sunshine.</p>
<p>The pattern is actually a useful one to notice: plumbing-and-HVAC combination businesses, and small regional operators acquiring their way into new service lines, are common moves in the Florida market. It's the same consolidation logic that drives a lot of the buying and selling activity covered in the next section � a plumbing company picking up an HVAC operation (or vice versa) to become a full-service home comfort provider almost always trades at a premium over either piece alone.</p>

<h2 id="buyers-guide" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida For Sale: What Buyers Should Know</h2>
<p>Florida consistently has one of the largest active markets for <a href="/listings">HVAC businesses for sale</a> in the country, and listings run the full range � from $45,000 franchise territories and $125,000 solo operations up to multi-location distribution companies asking $30 million or more. A few things are worth knowing before you start looking seriously:</p>
<ul>
  <li><strong>Pricing multiples vary widely.</strong> Based on current asking prices relative to reported cash flow, most established Florida HVAC businesses trade somewhere between 2x and 4x SDE, with larger, more diversified commercial operations sometimes pushing toward 4x�5x when they carry long-term contracts or a strong maintenance-agreement base.</li>
  <li><strong>Commercial-heavy businesses command a premium.</strong> Shops with 70�80% commercial or government revenue routinely list at higher multiples than residential-only operations of similar size.</li>
  <li><strong>Financing matters.</strong> Some sellers require all-cash buyers with no SBA financing; others are set up specifically for SBA-eligible deals. This varies listing to listing and affects who can realistically compete for a given business.</li>
  <li><strong>Confidentiality is standard.</strong> Because employees and competitors typically aren't aware a sale is underway, most listings � including on major marketplaces � show a general description and financials without naming the company, and buyers sign an NDA before getting full details.</li>
  <li><strong>Location shapes value.</strong> A business inside the High-Velocity Hurricane Zone (Miami-Dade and Broward) carries different equipment and permitting costs than one further north, which shows up in both operating margins and buyer interest.</li>
</ul>

<h2 id="tampa-market" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business for Sale in Tampa, Florida</h2>
<p>Tampa Bay is one of Florida's steadiest HVAC markets, largely because of its older housing stock � a lot of homes in the metro are due for system replacement rather than routine repair, which keeps install revenue flowing even in a slower economy. Recent Tampa-area listings have ranged from smaller, lower-overhead operations priced around $300,000 with roughly $75,000 in cash flow, up to established 20-plus-year residential shops around $700,000 with cash flow near $300,000, and larger multi-division commercial operations with four decades of history listing well above $1 million. If you're specifically hunting for an <a href="/listings">HVAC business for sale in Tampa Florida</a>, expect the strongest opportunities to be residential-heavy shops with a long-standing customer base and an active maintenance agreement program � that recurring revenue is exactly what buyers (and lenders) want to see.</p>

<h2 id="south-florida" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business for Sale in South Florida</h2>
<p>South Florida � Miami-Dade, Broward, and Palm Beach counties � is where the biggest and most expensive HVAC listings in the state tend to show up, partly because of population density and partly because HVHZ-compliant work commands premium pricing. Recent listings in the region have spanned a long-established Miami-Dade firm with over 50 years of history and roughly 80% commercial revenue, a Broward County operation split between service and commercial construction work, and smaller owner-operator shops in Hollywood and Deerfield Beach priced well under $200,000. If you're searching for an HVAC business for sale in South Florida, it's worth casting a wide net across Miami-Dade, Broward, and Palm Beach individually � pricing and deal structure differ meaningfully by county, and a business for sale in Miami tends to command different multiples than a comparable one in, say, Palm Beach County.</p>
<p>For buyers focused on a specific metro, that search usually breaks down into a few common patterns worth knowing going in:</p>
<ul>
  <li><strong>An HVAC business for sale in Miami</strong> is more likely to include HVHZ-compliant equipment and permitting history already in place - a real advantage if you plan to keep working in Miami-Dade or Broward, since it means the seller has already absorbed the cost and learning curve of hurricane-zone compliance.</li>
  <li><strong>An HVAC business for sale in Jacksonville FL</strong> tends to skew toward a mix of residential service and military-adjacent commercial work, given the base presence in the area - worth asking directly about the split when you're evaluating a listing.</li>
  <li>Searching <strong>"HVAC business for sale near me"</strong> will only get you so far on its own; because most listings don't disclose the company name for confidentiality reasons, working with a broker who already knows the regional market (and which sellers are seriously motivated versus just testing the waters) tends to surface better-fit opportunities faster than browsing marketplace listings alone.</li>
</ul>

<h2 id="best-business" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">What Makes the Best HVAC Business in Florida?</h2>
<p>Not every listing that says "turnkey" or "highly profitable" actually is. A handful of traits consistently separate the best HVAC businesses in Florida - the ones that sell fast, at strong multiples, to well-qualified buyers - from the ones that sit on the market:</p>
<ul>
  <li><strong>A real maintenance agreement base.</strong> Hundreds of active agreements, not just a mention of offering them, translate directly into predictable recurring revenue.</li>
  <li><strong>Documented financials.</strong> Clean books with SDE clearly reconciled from tax returns make lenders and buyers move faster and pay more confidently.</li>
  <li><strong>A commercial or government contract mix</strong>, which tends to be stickier and less price-sensitive than one-off residential repair calls.</li>
  <li><strong>Current licensing and insurance</strong>, with no gaps in workers' comp or general liability coverage that could complicate a sale.</li>
  <li><strong>A team that isn't entirely dependent on the owner.</strong> A business where the owner is still doing every service call themselves is worth meaningfully less than one with technicians and a service manager already in place.</li>
  <li><strong>Clean building code and permit history</strong>, especially for anything installed inside the HVHZ, since anchor and NOA documentation gaps can slow down financing and inspections during a sale.</li>
</ul>
<p class="text-sm mt-8 border-t pt-4"><em>This article is provided for general informational purposes and does not constitute legal, tax, financial, or investment advice. Licensing requirements, fees, and market data change - confirm current details with the DBPR, the Florida Department of Revenue, and a qualified advisor before making a decision to start, buy, or sell an HVAC business.</em></p>
`;

const faqs = [
  {
    question: "Do I need a state license to run an HVAC business in Florida?",
    answer: "Yes. Florida requires a DBPR Construction Industry Licensing Board mechanical contractor license - Class A or Class B - for any central HVAC installation or repair work. A county-level competency card isn't sufficient on its own."
  },
  {
    question: "How much does it cost to start an HVAC business in Florida?",
    answer: "Costs range from around $15,000 for a solo, service-only operation to $200,000 or more for a multi-crew commercial business, depending on your fleet size, tools, insurance, and staffing."
  },
  {
    question: "How much do HVAC business owners make in Florida?",
    answer: "Reported seller's discretionary earnings on current Florida HVAC business listings commonly range from about $75,000 for small owner-operator shops to $800,000 or more for larger commercial operations, with most well-run mid-sized businesses landing between $150,000 and $450,000."
  },
  {
    question: "Is it a good time to buy an HVAC business in Florida?",
    answer: "Florida's near year-round cooling season, hurricane-driven replacement demand, and the ongoing shift away from R-410A refrigerant are all tailwinds for established HVAC operators - which is a large part of why the state has one of the most active HVAC business-for-sale markets in the country."
  },
  {
    question: "Where can I find an HVAC business for sale in Florida?",
    answer: "Major business marketplaces list Florida HVAC businesses in every region, from Miami and Fort Lauderdale to Tampa, Jacksonville, and the Panhandle - though because most sellers require confidentiality, working with a broker who specializes in the HVAC sector often surfaces stronger, better-vetted opportunities than public listings alone."
  }
];

const seo = {
  metaTitle: "HVAC Business in Florida: Requirements, Costs, Pay & Businesses for Sale (2026)",
  metaDescription: "Thinking about starting, buying, or selling an HVAC business in Florida? Here's what it actually costs, what licenses you need, what owners earn, and where the best listings are - in Miami, Tampa, Jacksonville, and South Florida.",
  ogImage: "https://images.unsplash.com/photo-1705579605238-24a90c8799c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHZhYyUyMGJ1c2luZXNzfGVufDB8fDB8fHwy",
  ogImageAlt: "HVAC Business in Florida",
  canonicalUrl: "https://www.hvacexitadvisors.com/resources/hvac-business-in-florida",
  schemaType: "BlogPosting"
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const existing = await Blog.findOne({ slug: 'hvac-business-in-florida' });
    if (existing) {
      existing.title = "HVAC Business in Florida: The Complete 2026 Guide to Starting, Buying, and Selling One";
      existing.excerpt = "An HVAC business in Florida needs a state-issued DBPR mechanical contractor license (Class A or B), typically $15,000-$60,000 to launch depending on scale, and runs on a near year-round cooling season that keeps demand steady. Owners of established Florida HVAC companies commonly report $150,000-$800,000+ in annual seller's discretionary earnings.";
      existing.content = htmlContent;
      existing.coverImage = seo.ogImage;
      existing.coverImageAlt = seo.ogImageAlt;
      existing.tags = ["HVAC Business in Florida", "HVAC Business for Sale", "Florida HVAC Licensing", "Buy HVAC Business"];
      existing.faqs = faqs;
      existing.seo = seo;
      existing.status = 'published';
      existing.publishedAt = new Date();
      await existing.save();
      console.log("Updated existing blog post.");
    } else {
      await Blog.create({
        title: "HVAC Business in Florida: The Complete 2026 Guide to Starting, Buying, and Selling One",
        slug: "hvac-business-in-florida",
        excerpt: "An HVAC business in Florida needs a state-issued DBPR mechanical contractor license (Class A or B), typically $15,000-$60,000 to launch depending on scale, and runs on a near year-round cooling season that keeps demand steady. Owners of established Florida HVAC companies commonly report $150,000-$800,000+ in annual seller's discretionary earnings.",
        content: htmlContent,
        coverImage: seo.ogImage,
        coverImageAlt: seo.ogImageAlt,
        tags: ["HVAC Business in Florida", "HVAC Business for Sale", "Florida HVAC Licensing", "Buy HVAC Business"],
        faqs: faqs,
        seo: seo,
        status: 'published',
        publishedAt: new Date()
      });
      console.log("Created new blog post.");
    }
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
