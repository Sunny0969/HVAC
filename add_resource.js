const fs = require('fs');
const file = 'src/app/resources/page.tsx';
let text = fs.readFileSync(file, 'utf8');

const newArticle = `  {
    title: "Ultimate Guide to the Florida HVAC Industry: Salaries, Demand, and Business Rules",
    category: "Industry Insights",
    description: "Discover how much HVAC owners make in Florida, understand the $5000 rule, licensing requirements, and find out if Florida is a lucrative market.",
    href: "/resources/florida-hvac-industry-guide",
    readTime: "8 min read",
  },
`;

text = text.replace('const staticArticles = [', 'const staticArticles = [\n' + newArticle);
fs.writeFileSync(file, text, 'utf8');
