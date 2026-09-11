/** PM2 process file for DreamHost VPS / any Linux Node host. */
module.exports = {
  apps: [
    {
      name: 'hvacexitadvisors-cms',
      script: 'src/server.js',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
