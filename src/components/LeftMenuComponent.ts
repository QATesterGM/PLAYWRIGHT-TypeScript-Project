import { Locator, Page } from '@playwright/test';
import { AddProjectModal } from '../modals/AddProjectModal';
import { BaseComponent } from './BaseComponent';

export class LeftMenuComponent extends BaseComponent {
  // Components
  readonly addProjectModal: AddProjectModal;

  constructor(protected page: Page) {
    super(page);
    this.addProjectModal = new AddProjectModal(page);
  }

  // Locators
  private readonly leftMenuLocator = (): Locator => this.page.getByTestId('app-sidebar-container');

  // Actions
  async openProjectsMenu(): Promise<void> {
    await this.leftMenuLocator().getByRole('button', { name: 'Menu Moje projekty ' }).click();
    await this.page.getByLabel('Dodaj projekt').click();
  }
}
