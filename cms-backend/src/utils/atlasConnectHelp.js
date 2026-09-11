/** Fetch public IPv4 for Atlas Network Access whitelist hints. */
export async function fetchPublicIpv4() {
  try {
    const res = await fetch('https://api.ipify.org', { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const ip = (await res.text()).trim();
    return /^\d{1,3}(\.\d{1,3}){3}$/.test(ip) ? ip : null;
  } catch {
    return null;
  }
}

export function isLikelyAtlasIpBlockError(err) {
  const msg = String(err?.message || err || '');
  if (/whitelist|IP that isn't whitelisted/i.test(msg)) return true;
  const servers = err?.reason?.servers || err?.cause?.servers;
  if (!servers) return false;
  for (const [, desc] of servers) {
    const tls = String(desc?.error?.message || '');
    if (/tlsv1 alert internal error|SSL alert number 80/i.test(tls)) return true;
  }
  return false;
}

export async function printAtlasWhitelistHelp(err) {
  if (!isLikelyAtlasIpBlockError(err)) return false;

  const ip = await fetchPublicIpv4();
  console.error('\n--- MongoDB Atlas: allow this machine ---');
  if (ip) {
    console.error(`Your public IP: ${ip}`);
    console.error(`Atlas → Network Access → Add IP Address → ${ip}/32`);
  } else {
    console.error('Atlas → Network Access → Add Current IP Address');
  }
  console.error('Or temporarily: Allow Access from Anywhere (0.0.0.0/0) — restrict after testing.');
  console.error('Changes take ~1 minute. Then run: npm run verify');
  console.error('https://www.mongodb.com/docs/atlas/security-whitelist/\n');
  return true;
}
