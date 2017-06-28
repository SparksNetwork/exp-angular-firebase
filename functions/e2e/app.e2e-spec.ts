import { ExpAngularFirebasePage } from './app.po';

describe('exp-angular-firebase App', () => {
  let page: ExpAngularFirebasePage;

  beforeEach(() => {
    page = new ExpAngularFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
