import { Asn16Page } from './app.po';

describe('asn16 App', function() {
  let page: Asn16Page;

  beforeEach(() => {
    page = new Asn16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
