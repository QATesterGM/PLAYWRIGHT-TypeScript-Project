import { expect, test } from "../../src/fixtures/po.fixture";


test('should create a new project', { tag: '@project' }, async ({ homePage }) => {
  // Act
  await homePage.open();
  await homePage.leftPanel.addNewProject('Nowy Test Projek3', 'Intensywny czerwony');

  // Assert
  await expect(homePage.leftPanel.getProjectByName('Nowy Test Projek3')).toBeVisible();
});
