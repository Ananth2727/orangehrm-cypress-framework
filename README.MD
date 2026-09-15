# OrangeHRM Cypress Automation Framework

Cypress automation framework built using **JavaScript** for UI and API testing of the OrangeHRM application.

## Tech Stack

* Cypress
* JavaScript
* Mochawesome
* GitHub Actions

## Features

* UI automation
* API automation
* Page Object Model (POM)
* Custom Cypress commands
* `cy.session()` for authentication
* Fixture-based test data
* Reusable API client
* Mochawesome reporting
* GitHub Actions CI/CD
* UI and API tests running in parallel

## Project Structure

```text
cypress/
├── e2e/
│   ├── ui/
│   └── api/
├── fixtures/
├── pages/
└── support/
    └── api/

.github/
└── workflows/
```

## Test Coverage

### UI

* Login
* Dashboard
* PIM
* Admin
* Leave

### API

* Employee
* Employee Search
* Employee Details
* Invalid Employee

## Run Tests

Run all tests:

```bash
npm run cy:run
```

Run UI tests:

```bash
npm run test:ui
```

Run API tests:

```bash
npm run test:api
```

Open Cypress:

```bash
npm run cy:open
```

Generate Mochawesome report:

```bash
npm run test:report
```

## CI/CD

GitHub Actions runs the Cypress tests automatically and executes the UI and API suites in parallel.

## Application

OrangeHRM Demo:

https://opensource-demo.orangehrmlive.com/

