import { fetchPublicIpv4 } from '../utils/atlasConnectHelp.js';

const ip = await fetchPublicIpv4();
if (!ip) {
  console.error('check-ip: could not detect public IP — open https://api.ipify.org in a browser');
  process.exit(1);
}

console.log(`check-ip: add this IP in MongoDB Atlas → Network Access:\n  ${ip}/32`);
console.log('Then: npm run verify && npm start');
