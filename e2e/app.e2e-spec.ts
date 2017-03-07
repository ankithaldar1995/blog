import { GrabFromNodePage } from './app.po';

describe('grab-from-node App', function() {
  let page: GrabFromNodePage;

  beforeEach(() => {
    page = new GrabFromNodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
