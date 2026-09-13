const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const blogSchema = new mongoose.Schema({}, { strict: false });
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  let blog = await Blog.findOne({ slug: 'hvac-business-in-florida' });
  if (blog) {
    // 1. Shorter SEO Title
    blog.seoTitle = "Florida HVAC Business Guide: Requirements & Costs (2026)"; // 57 chars
    blog.title = "Florida HVAC Business Guide: Requirements & Costs (2026)"; // Make H1 exactly the same or similar
    
    // 2. Set Dates so they render
    blog.date = new Date();
    blog.publishedAt = new Date();
    
    // 3. Make sure the main topic "Florida HVAC Business" is in the first 250 words
    if (!blog.content.includes("Welcome to the complete Florida HVAC Business roadmap")) {
       blog.content = `<p class="lead text-xl text-gray-700 font-medium mb-8"><strong>Welcome to the complete Florida HVAC Business roadmap.</strong> ` + blog.content.substring(blog.content.indexOf('<p class="lead'));
    }
    
    // 4. Break long paragraphs
    blog.content = blog.content.replace(
      'Because HVAC is a construction trade, the threshold is just <strong>one employee</strong> (including LLC members). Class codes are 5537 (residential) and 5538 (commercial). Owners (min 10%) can file a Notice of Election to Be Exempt for $50.',
      'Because HVAC is a construction trade, the threshold is just <strong>one employee</strong> (including LLC members).<br><br>Class codes are 5537 (residential) and 5538 (commercial). Owners (min 10%) can file a Notice of Election to Be Exempt for $50.'
    );
    
    // 5. Add one more external link just in case
    if (!blog.content.includes('ashrae.org')) {
       blog.content = blog.content.replace(
           'the federal AIM Act\'s R-410A phase-down',
           'the federal AIM Act\'s R-410A phase-down (guided by <a href="https://www.ashrae.org" target="_blank" rel="noopener noreferrer">ASHRAE</a> standards)'
       );
    }
    
    await blog.save();
    console.log("DB Updated with SEO fixes.");
  }
  process.exit(0);
}
run();
