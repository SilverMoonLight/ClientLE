import { ClientLEPage } from './app.po';

describe('client-le App', () => {
  let page: ClientLEPage;

  beforeEach(() => {
    page = new ClientLEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
