import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('should create a new project', { tag: '@project' }, async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);

  // Act
  await homePage.open();
  await homePage.leftPanel.openProjectsMenu();
  await homePage.leftPanel.addProjectModal.addNewProject('Nowy Test Projekt', 'Intensywny czerwony');

  const projectList = page.locator('#projects_list');
  await expect(projectList.locator('li').first()).toHaveText('Nowy Test Projekt');
});
