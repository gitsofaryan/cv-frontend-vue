exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],  // Path to E2E test files
  capabilities: [{
    'tauri:platform': 'desktop',  // Target Tauri desktop app
  }],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  services: ['tauri'],
  reporters: ['spec'],
  logLevel: 'info',
  baseUrl: 'http://localhost:3000',  // Mock API URL
  before: function () {
    require('tauri-driver');  // Load tauri-driver for desktop testing
  },
};
