import { NgDealerPage } from './app.po';

describe('ng-dealer App', () => {
  let page: NgDealerPage;

  beforeEach(() => {
    page = new NgDealerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
