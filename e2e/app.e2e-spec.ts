import { NgCliLearnPage } from './app.po';

describe('ng-cli-learn App', function() {
  let page: NgCliLearnPage;

  beforeEach(() => {
    page = new NgCliLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
