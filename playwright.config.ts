import { defineConfig, devices } from 'playwright/test';
export default defineConfig({
  timeout: 80000, // time-out 80000
  reporter: [
    ['html', { open: 'never', outputFolder: 'html-report' }]
  ],
  use: {
    baseURL: 'https://automationexercise.com', //Base url
    headless: true, // headless mode as default
    screenshot: 'only-on-failure', //Screenshot when failing
    video: 'retain-on-failure', // recording configuration
    trace: 'retain-on-failure', // trace

  },
  projects: [
      {
        name: 'chromium', //Project for Chromium (Google Chrome)
        use: { 
          ...devices['Desktop Chrome'], // Use desktop Chrome settings
        },
        testMatch: '**/e2e/*.spec.ts', // Match tests in the e2e folder
      },
      
      {
        name: 'firefox', // Project for Firefox
        use: { 
          ...devices['Desktop Firefox'], // Use desktop Firefox settings
        },
        testMatch: '**/e2e/**/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'webkit', // Project for WebKit (Safari)
        use: { 
          ...devices['Desktop Safari'], // Use desktop Safari settings
        },
        testMatch: '**/e2e/**/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'edge', // Project for Microsoft Edge
        use: { 
          ...devices['Desktop Edge'], // Use desktop Edge settings
        },
        testMatch: '**/e2e/**/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'ios', // iso project
        use: { ...devices['iPhone 15 Pro Max'] }, // selected one iphone device
        testMatch: '**/e2e/**/*.spec.ts', 
  
      },
      {
        name: 'android', // android device project
        use: { ...devices['Pixel 7'] }, 
        testMatch: '**//e2e/**/*.spec.ts', 
      },
       {
        name: 'performance',  //performance and accessibility with lighthouse project
        testMatch: '**/performance/**/*.spec.ts',  
        use: {
          ...devices['Desktop Chrome'],  
        },
      },
  ],
});
