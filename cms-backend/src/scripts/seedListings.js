import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Listing from '../models/Listing.js';

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB.');

  const sample = new Listing({
    title: 'Extremely Long Term Residential HVAC Serving the Baltimore Metro Area',
    status: 'Active',
    location: 'Baltimore County, Maryland, United States',
    industry: 'HVAC Businesses',
    askingPrice: 1700000,
    revenue: 1750000,
    cashFlow: 441000,
    description: '<p>Fantastic opportunity to own this long term HVAC company serving the Baltimore metro area. They are 99% residential, with no new construction or refrigeration. They have flat rate pricing, a CRM in place and 650 maintenance agreements. The business split is 40% service, 60% install and the payroll is outsourced.</p>',
    realEstate: 'Rent is $1,000 per month\nBuilding Size: 700 sq. ft.',
    ffe: '$55k',
    inventory: '$5k\nIncluded in Asking Price',
    employees: 'Full-Time: 6',
    yearEstablished: '1982',
    reasonSelling: 'Moving on to the next chapter of their lives',
    supportTraining: 'Comprehensive transition assistance provided.',
    marketCompetition: 'The HVAC industry is full of competition, however companies who take care of their customers remain busy year-round',
    coverImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070',
    coverImageAlt: 'HVAC Manifold Gauges',
    faqs: [
      { question: 'Are vehicles included?', answer: 'Yes, 4 fully equipped service vans are included in the FF&E.' }
    ]
  });

  await sample.save();
  console.log('Sample listing seeded: ' + sample.slug);
  process.exit(0);
}
seed().catch(err => { console.error(err); process.exit(1); });
