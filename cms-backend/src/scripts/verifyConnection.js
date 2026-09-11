import 'dotenv/config';
import { connectDb, disconnectDb } from '../config/db.js';
import { AdminUser } from '../models/AdminUser.js';
import { Blog } from '../models/Blog.js';
import { Category } from '../models/Category.js';
import { printAtlasWhitelistHelp } from '../utils/atlasConnectHelp.js';

async function main() {
  console.log('verify: connecting to MongoDB…');
  const conn = await connectDb();
  console.log(`verify: connected — db="${conn.name}" host="${conn.host}"`);

  const [admins, blogs, categories] = await Promise.all([
    AdminUser.countDocuments(),
    Blog.countDocuments(),
    Category.countDocuments(),
  ]);

  console.log(`verify: AdminUser count = ${admins}`);
  console.log(`verify: Blog count = ${blogs}`);
  console.log(`verify: Category count = ${categories}`);
  console.log('verify: OK');

  await disconnectDb();
}

main().catch(async (err) => {
  console.error('verify: FAIL —', err.message);
  await printAtlasWhitelistHelp(err);
  try {
    await disconnectDb();
  } catch {
    /* ignore */
  }
  process.exit(1);
});
