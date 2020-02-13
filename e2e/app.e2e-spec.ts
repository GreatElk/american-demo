import { AmericanDemoPage } from './app.po';

describe('american-demo App', () => {
  let page: AmericanDemoPage;

  beforeEach(() => {
    page = new AmericanDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
