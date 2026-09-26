const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://suneelpirkash_db_user:sQTKrYDIr4gHKOjw@cluster0.tzem2ps.mongodb.net/hvac?appName=Cluster0');
  const db = mongoose.connection.db;
  
  const docs = await db.collection('leads').find({ status: 'new' }).sort({ createdAt: -1 }).limit(5).toArray();
  
  console.log(JSON.stringify(docs.map(d => ({ type: d.type, message: d.message, createdAt: d.createdAt, source: d.source })), null, 2));
  process.exit(0);
}

run();
