const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://suneelpirkash_db_user:sQTKrYDIr4gHKOjw@cluster0.tzem2ps.mongodb.net/hvac?appName=Cluster0');
  const db = mongoose.connection.db;
  
  const result = await db.collection('leads').updateMany(
    { 
      $or: [
        { source: 'WhatsApp Click' },
        { message: 'Clicked WhatsApp button' }
      ]
    },
    { $set: { type: 'whatsapp' } }
  );

  console.log(`Updated ${result.modifiedCount} existing WhatsApp leads in DB`);
  process.exit(0);
}

run();
