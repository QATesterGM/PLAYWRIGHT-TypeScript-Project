import { expect, Locator } from '@playwright/test';
import { BaseModal } from './BaseModal';

export class AddProjectModal extends BaseModal {
  // Locators
  readonly addProjectForm = (): Locator => this.page.getByTestId('modal-overlay').locator('form');

  // Actions
  async addNewProject(name: string, color: string): Promise<void>{
    await expect(this.addProjectForm()).toBeVisible();
    await this.addProjectForm().locator('input[name="name"]').fill(name);
    await this.addProjectForm().locator('div[role=combobox]').click();
    const projectColorSelector = this.page.locator('.form_field div[role=dialog]');
    await expect(projectColorSelector).toBeVisible();
    await projectColorSelector.getByText(color).click();
    await this.addProjectForm().getByRole('button', { name: 'Dodaj' }).click();
  }
}
