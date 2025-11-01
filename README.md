# Playwright LambdaTest Project

This project contains Playwright tests for the LambdaTest certification assignment.

## Prerequisites

*   Node.js
*   npm
*   A LambdaTest account with a username and access key

## Setup

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root of the project and add your LambdaTest credentials:
    ```
    LT_USERNAME="YOUR_USERNAME"
    LT_ACCESS_KEY="YOUR_ACCESS_KEY"
    ```

## Running the Tests

To run the tests on LambdaTest, use the following command:

```bash
npx playwright test --config=lambdatest-playwright.config.ts
