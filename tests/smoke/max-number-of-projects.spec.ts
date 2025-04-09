import { expect, test } from '../../src/fixtures/po.fixture';
import { CreateProjectModel } from '../../src/models/create-project-model';

test.describe('Max number of projects on free plan', () => {
  test('create project over limit', { tag: ['@smoke', '@smoke002'] }, async ({ homePage }) => {
    // Arrange
    const projects: CreateProjectModel[] = [
      { name: 'Project One', color: 'Intensywny czerwony' },
      { name: 'Project Two', color: 'Intensywny czerwony' },
      { name: 'Project Three', color: 'Intensywny czerwony' },
      { name: 'Project Four', color: 'Intensywny czerwony' },
      { name: 'Project Five', color: 'Intensywny czerwony' },
    ];

    const expectedHeader = 'Chcesz mieć do dyspozycji więcej projektów?';

    // Act
    await homePage.open();
    for (const project of projects) {
      await homePage.leftPanel.addNewProject(project);
      await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
    }

    await homePage.leftPanel.openProjectsMenu();

    // Assert
    const premiumModal = homePage.leftPanel.buyPremiumModal;
    await expect(premiumModal.modal()).toBeVisible();
    await expect(premiumModal.header()).toHaveText(expectedHeader);
  });
});
