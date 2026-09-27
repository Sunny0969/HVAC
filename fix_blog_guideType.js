const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://suneelpirkash_db_user:sQTKrYDIr4gHKOjw@cluster0.tzem2ps.mongodb.net/hvac?appName=Cluster0');
  const db = mongoose.connection.db;
  
  // Set all blogs that are missing guideType or have 'resource' to 'seller-guide' by default
  const result = await db.collection('blogs').updateMany(
    { 
      $or: [
        { guideType: { $exists: false } },
        { guideType: 'resource' }
      ]
    },
    { $set: { guideType: 'seller-guide' } }
  );

  console.log(`Updated ${result.modifiedCount} blogs to seller-guide`);
  process.exit(0);
}

run();
