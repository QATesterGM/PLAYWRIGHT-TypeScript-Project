import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('should create a new project', { tag: '@project' }, async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);

  // Act
  await homePage.open();
  await homePage.leftPanel.addNewProject('Nowy Test Projek3', 'Intensywny czerwony');

  // Assert
  await expect(homePage.leftPanel.getProjectByName('Nowy Test Projek3')).toBeVisible();
});
