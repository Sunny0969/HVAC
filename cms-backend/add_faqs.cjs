const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const blogSchema = new mongoose.Schema({}, { strict: false });
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  let blog = await Blog.findOne({ slug: 'hvac-business-in-florida' });
  if (blog) {
    blog.faqs = [
      {
        question: "What license do I actually need to run an HVAC business in Florida?",
        answer: "Florida requires a DBPR Construction Industry Licensing Board mechanical contractor license - Class A or Class B - for any central HVAC installation or repair work. A county-level competency card isn't sufficient on its own."
      },
      {
        question: "How much does it cost to start an HVAC business in Florida?",
        answer: "Costs range from around $15,000 for a solo, service-only operation to $200,000 or more for a multi-crew commercial business, depending on your fleet size, tools, insurance, and staffing."
      },
      {
        question: "Are HVAC jobs taxable in Florida?",
        answer: "It depends. Ducted systems are real property improvements (tax on materials paid by you). Portable units are tangible property (tax charged to customer on parts and labor)."
      }
    ];
    await blog.save();
    console.log("Added FAQs to blog successfully.");
  }
  process.exit(0);
}
run();
