const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://suneelpirkash_db_user:sQTKrYDIr4gHKOjw@cluster0.tzem2ps.mongodb.net/hvac?appName=Cluster0');
  const db = mongoose.connection.db;
  
  const docs = await db.collection('blogs').find({}).sort({ createdAt: -1 }).limit(3).toArray();
  
  console.log(JSON.stringify(docs.map(d => ({ id: d._id, title: d.title, status: d.status, guideType: d.guideType })), null, 2));
  process.exit(0);
}

run();
