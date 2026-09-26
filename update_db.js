const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://suneelpirkash_db_user:sQTKrYDIr4gHKOjw@cluster0.tzem2ps.mongodb.net/hvac?appName=Cluster0');
  const db = mongoose.connection.db;
  
  await db.collection('blogs').updateMany(
    { slug: { $in: ['hvac-business-in-florida', 'florida-hvac-industry-guide'] } },
    { $set: { guideType: 'seller-guide' } }
  );
  
  await db.collection('blogs').updateMany(
    { slug: { $in: ['why-every-hvac-owner-in-florida-needs-an-exit-strategy', 'timing-purchase-florida'] } },
    { $set: { guideType: 'buyer-guide' } }
  );

  console.log("Updated DB documents");
  process.exit(0);
}

run();
