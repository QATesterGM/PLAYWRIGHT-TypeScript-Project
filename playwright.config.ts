import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

export const LOGIN_SESSION = path.join(__dirname, 'tmp/login.json');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://app.todoist.com',

    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], locale: 'pl-PL', storageState: LOGIN_SESSION },
    },
  ],
});
