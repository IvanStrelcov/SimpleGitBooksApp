import { SimpleGitBooksAppPage } from './app.po';

describe('simple-git-books-app App', function() {
  let page: SimpleGitBooksAppPage;

  beforeEach(() => {
    page = new SimpleGitBooksAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
