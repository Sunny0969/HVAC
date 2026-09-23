const fs = require('fs');
let content = fs.readFileSync('src/app/hvac-business-valuation/page.tsx', 'utf8');

content = content.replace(
  'title: "HVAC Business Valuation in Florida",',
  'title: "How to Value a Heating and Air Conditioning Business",'
);
content = content.replace(
  'title: "HVAC Business Valuation in Florida",',
  'title: "How to Value a Heating and Air Conditioning Business",'
);

content = content.replace(
  'description: "Learn how earnings, recurring agreements, technicians, service mix and owner dependence affect the value of an HVAC business.",',
  'description: "Learn how to value a heating and air conditioning business based on earnings, recurring agreements, technicians, service mix and owner dependence.",'
);
content = content.replace(
  'description: "Learn how earnings, recurring agreements, technicians, service mix and owner dependence affect the value of an HVAC business.",',
  'description: "Learn how to value a heating and air conditioning business based on earnings, recurring agreements, technicians, service mix and owner dependence.",'
);

fs.writeFileSync('src/app/hvac-business-valuation/page.tsx', content);
console.log("Updated Valuation SEO");
