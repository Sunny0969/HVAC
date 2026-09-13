const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

const urls = [
    { name: 'Homepage', url: 'http://localhost:3000/' },
    { name: 'Product/Listings', url: 'http://localhost:3000/listings' },
    { name: 'Landing (Sell)', url: 'http://localhost:3000/sell-your-hvac-business' },
    { name: 'Education', url: 'http://localhost:3000/resources' },
    { name: 'Blog', url: 'http://localhost:3000/resources/timing-purchase-florida' }
];

async function runLighthouse(url, strategy) {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {
        logLevel: 'error',
        output: 'json',
        onlyCategories: ['performance'],
        port: chrome.port,
        strategy: strategy
    };
    
    const config = {
      extends: 'lighthouse:default',
      settings: {
        formFactor: strategy,
        screenEmulation: strategy === 'mobile' ? {
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2.625,
          disabled: false,
        } : {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttling: strategy === 'mobile' ? {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        } : {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        }
      }
    };

    const runnerResult = await lighthouse(url, options, config);
    await chrome.kill();
    
    const lhr = runnerResult.lhr;
    const audits = lhr.audits;
    
    return {
        strategy,
        score: lhr.categories.performance.score * 100,
        LCP: audits['largest-contentful-paint'].displayValue,
        CLS: audits['cumulative-layout-shift'].displayValue,
        TBT: audits['total-blocking-time'].displayValue,
        TTFB: audits['server-response-time'].displayValue,
        TotalWeight: (audits['total-byte-weight'].numericValue / 1024).toFixed(2) + ' KB',
        ImageWeight: ((audits['resource-summary']?.details?.items?.find(i => i.resourceType === 'image')?.transferSize || 0) / 1024).toFixed(2) + ' KB',
        ImageCount: audits['resource-summary']?.details?.items?.find(i => i.resourceType === 'image')?.requestCount || 0,
    };
}

(async () => {
    console.log("Starting Lighthouse tests...");
    const results = {};
    for (const page of urls) {
        console.log(`Testing ${page.name} (${page.url})...`);
        try {
            console.log("  Mobile...");
            const mobile = await runLighthouse(page.url, 'mobile');
            console.log("  Desktop...");
            const desktop = await runLighthouse(page.url, 'desktop');
            results[page.name] = { mobile, desktop };
        } catch(e) {
            console.error(`Error testing ${page.name}:`, e.message);
        }
    }
    fs.writeFileSync('lighthouse-results.json', JSON.stringify(results, null, 2));
    console.log("Done!");
})();
