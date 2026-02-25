import { Page, Locator, expect } from '@playwright/test';

export class BooksByKiloSearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly bookTitle: (title: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search for books"]');
    this.bookTitle = (title: string) => page.locator('h3', { hasText: title });
  }

  async goto() {
    await this.page.goto('https://www.booksbykilo.in/books?s=new%20book');
  }

  async searchForBook(query: string) {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }

  async expectBookVisible(title: string) {
    await expect(this.bookTitle(title)).toBeVisible();
  }
}
