import { TestprimengPage } from './app.po';

describe('testprimeng App', function() {
  let page: TestprimengPage;

  beforeEach(() => {
    page = new TestprimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
