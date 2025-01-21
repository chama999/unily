### unily
Test project for Unily

# 1. Setup

1. Create a folder and open the terminal in that folder.
2. execute:  git clone https://github.com/chama999/unily
3. execute: cd unily
4. execute: npm install
5. execute: npx playwright install 

# 2. How to run the tests
After cloning the repository and installed the dependencies, execute below commands to run tests:

* E2E Testing headless mode: npx playwright test
* E2E Testing in headed mode: npx playwright test --headed
* Run only: performance and accessibility tests with lighthouse: npx playwright test --project=performance
