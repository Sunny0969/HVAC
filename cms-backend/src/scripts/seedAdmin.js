import 'dotenv/config';
import { connectDb, disconnectDb } from '../config/db.js';
import { AdminUser } from '../models/AdminUser.js';

async function main() {
  const email = String(process.env.ADMIN_EMAIL || '')
    .trim()
    .toLowerCase();
  const password = String(process.env.ADMIN_PASSWORD || '');
  const name = String(process.env.ADMIN_NAME || 'Admin').trim();

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env');
  }

  await connectDb();

  const passwordHash = await AdminUser.hashPassword(password);
  const admin = await AdminUser.findOneAndUpdate(
    { email },
    {
      email,
      passwordHash,
      name,
      role: 'admin',
      isActive: true,
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  await AdminUser.updateMany({ email: { $ne: email } }, { $set: { isActive: false } });

  console.log(`seed:admin OK — ${admin.email} (${admin._id})`);
  await disconnectDb();
}

main().catch(async (err) => {
  console.error('seed:admin FAIL —', err.message);
  try {
    await disconnectDb();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
