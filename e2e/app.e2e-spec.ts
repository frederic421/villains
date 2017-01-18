import { VilainsPage } from './app.po';

describe('vilains App', function() {
  let page: VilainsPage;

  beforeEach(() => {
    page = new VilainsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vil works!');
  });
});
