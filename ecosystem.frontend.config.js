module.exports = {
  apps: [
    {
      name: 'frontend',
      cwd: '/home/admin/html/frontend',
      script: 'yarn',
      args: 'start',
      interpreter: '/home/admin/.nvm/versions/node/v16.20.2/bin/node',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
