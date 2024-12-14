# pwts-base-setup

This is a base setup for Playwright with TypeScript prepared by [<pwts.dev>](https://pwts.dev/).

It includes all necessary configurations and dependencies to get started with automated testing using Playwright and TypeScript.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v16 or later)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/pwtsdev/pwts-base-setup.git
   cd pwts-base-setup
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Dependencies

The project includes the following dependencies:

- `@eslint/js`: ^9.17.0
- `@faker-js/faker`: ^9.3.0
- `@playwright/test`: ^1.49.1
- `@types/node`: ^22.10.2
- `eslint`: ^9.17.0
- `eslint-config-prettier`: ^9.1.0
- `eslint-plugin-playwright`: ^2.1.0
- `prettier`: ^3.4.2
- `typescript`: ^5.7.2
- `typescript-eslint`: ^8.18.0
- `dotenv`: ^16.4.7
- `tslog`: ^4.9.3

## Scripts

The `package.json` file includes several scripts to help you run and manage your tests:

- `pretest`: Runs TypeScript compiler without emitting files and lints the code using ESLint.
- `test`: Runs all Playwright tests.
- `test:headed`: Runs all Playwright tests in headed mode.
- `test:debug`: Runs all Playwright tests in debug mode.
- `test:ui`: Opens the Playwright test runner UI.
- `test:nolint`: Runs all Playwright tests without linting.
- `show-report`: Opens the Playwright test report.

## Running Tests

To run the tests, you can use the following commands:

1. Install dependencies:

   ```sh
   npm install
   ```

2. Run all tests:

   ```sh
   npm run test
   ```

3. Run tests in headed mode:

   ```sh
   npm run test:headed
   ```

4. Run tests in debug mode:

   ```sh
   npm run test:debug
   ```

5. Open the Playwright test runner UI:

   ```sh
   npm run test:ui
   ```

6. Run tests without linting:

   ```sh
   npm run test:nolint
   ```

7. Show the Playwright test report:

   ```sh
   npm run show-report
   ```

## Configuration

The project is configured to use Prettier and ESLint for code formatting and linting. The configuration files are located in the `.vscode` directory and the root of the project:

- `settings.json`: Contains VS Code settings for auto-saving, formatting, and linting.
- `extensions.json`: Recommends extensions for VS Code.
- `tsconfig.json`: TypeScript configuration file.
- `.prettierignore`: Files and directories to ignore for Prettier.
- `.gitignore`: Files and directories to ignore for Git.

## License

This project is licensed under the ISC License.

## Fun Facts

Did you know? Debugging is like being the detective in a crime movie where you are also the murderer 🕵️‍♂️

Happy hacking!

[<pwts.dev>](https://pwts.dev/) team [@bkita](https://github.com/bkita) and [@mkusz](https://github.com/mkusz).
