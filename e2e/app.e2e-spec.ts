import { PifRefIhmPage } from './app.po';

describe('pif-ref-ihm App', () => {
  let page: PifRefIhmPage;

  beforeEach(() => {
    page = new PifRefIhmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
