import { test } from '@playwright/test';

const thresholds = {
  performance: 80,
      accessibility: 50,
      'best-practices': 50,
      seo: 50,
      pwa: 50
}

test.describe('Lighthouse Performance and Accessibility Tests', () => {
  test('Home Page', async ({  playwright }) => {
    const { playAudit } = await import("playwright-lighthouse")
    
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    }); // Launch Playwright browser
    const context = await browser.newContext(); //creating new context.
    const page = await context.newPage(); //creating new page.


    // Navigate to the homepage
    const url = "https://automationexercise.com/";
    await page.goto(url);

    
    await playAudit({
      thresholds: thresholds,
      ignoreError: false,
      port: 9222,
      page: page,
      reports:{
        "formats": {html: true},
        name: "lighthouse-report" + Date.now().toString(),
        directory: './test-results/lighthouse-reports'
      }
    })
    
    //closing page context and browser.
    await page.close();
    await context.close();
    await browser.close(); 
  });

  test('Login Page', async ({  playwright }) => {
    const { playAudit } = await import("playwright-lighthouse")
    
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    }); // Launch Playwright browser
    const context = await browser.newContext(); //creating new context.
    const page = await context.newPage(); //creating new page.


    // Navigate to the homepage
    const url = "https://automationexercise.com/login";
    await page.goto(url);

    
    await playAudit({
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      },
      ignoreError: true,
      port: 9222,
      page: page,
      reports:{
        "formats": {html: true},
        name: "lighthouse-report" + Date.now().toString(),
        directory: 'lighthouse-reports'
      }
    })
    
    await page.close();
    await context.close();
    await browser.close(); // Close the Playwright browser
  });

  test('Cart Page', async ({  playwright }) => {
    const { playAudit } = await import("playwright-lighthouse")
    
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    }); // Launch Playwright browser
    const context = await browser.newContext(); //creating new context.
    const page = await context.newPage(); //creating new page.


    // Navigate to the homepage
    const url = "https://automationexercise.com/view_cart";
    await page.goto(url);

    
    await playAudit({
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      },
      ignoreError: true,
      port: 9222,
      page: page,
      reports:{
        "formats": {html: true},
        name: "lighthouse-report" + Date.now().toString(),
        directory: 'lighthouse-reports'
      }
    })
    
    await page.close();
    await context.close();
    await browser.close(); // Close the Playwright browser
  });

  test('Products Page', async ({  playwright }) => {
    const { playAudit } = await import("playwright-lighthouse")
    
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    }); // Launch Playwright browser
    const context = await browser.newContext(); //creating new context.
    const page = await context.newPage(); //creating new page.


    // Navigate to the homepage
    const url = "https://automationexercise.com/products";
    await page.goto(url);

    
    await playAudit({
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      },
      ignoreError: true,
      port: 9222,
      page: page,
      reports:{
        "formats": {html: true},
        name: "lighthouse-report" + Date.now().toString(),
        directory: 'lighthouse-reports'
      }
    })
    
    await page.close();
    await context.close();
    await browser.close(); // Close the Playwright browser
  });

  test('Product Detail Page', async ({  playwright }) => {
    const { playAudit } = await import("playwright-lighthouse")
    
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222']
    }); // Launch Playwright browser
    const context = await browser.newContext(); //creating new context.
    const page = await context.newPage(); //creating new page.


    // Navigate to the homepage
    const url = "https://automationexercise.com/product_details/3";
    await page.goto(url);

    
    await playAudit({
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      },
      ignoreError: true,
      port: 9222,
      page: page,
      reports:{
        "formats": {html: true},
        name: "lighthouse-report" + Date.now().toString(),
        directory: 'lighthouse-reports'
      }
    })
    
    await page.close();
    await context.close();
    await browser.close(); // Close the Playwright browser
  });
  
});
