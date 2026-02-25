
import { test, expect } from '@playwright/test';
import { BooksByKiloSearchPage } from './booksbykilo-search-page';

test('search for new book and verify result', async ({ page }) => {
  const booksPage = new BooksByKiloSearchPage(page);
  // Step 1: Navigate to the search results page directly
  await booksPage.goto();

  // Step 2: Search for 'new book' (redundant in this URL, but included for POM completeness)
  // await booksPage.searchForBook('new book');

  // Step 3: Verify the book is present in the list
  await booksPage.expectBookVisible('Releasing Your Church to Grow');

  // Extra assertion: Verify at least one book is displayed
  const bookItems = page.locator('h3');
  const count = await bookItems.count();
  expect(count).toBeGreaterThan(0);

});
