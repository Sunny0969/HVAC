const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://suneelpirkash_db_user:sQTKrYDIr4gHKOjw@cluster0.tzem2ps.mongodb.net/hvac?appName=Cluster0');
  const db = mongoose.connection.db;
  
  const listings = await db.collection('listings').find({ status: { $ne: 'Draft' } }).toArray();
  
  const locations = listings.map(l => l.location);
  console.log(JSON.stringify(locations, null, 2));
  
  process.exit(0);
}

run();
