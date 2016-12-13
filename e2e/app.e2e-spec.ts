import { PostSitePage } from './app.po';

describe('post-site App', function() {
  let page: PostSitePage;

  beforeEach(() => {
    page = new PostSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
