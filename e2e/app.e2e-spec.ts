import { FaceAngularPage } from './app.po';

describe('face-angular App', function() {
  let page: FaceAngularPage;

  beforeEach(() => {
    page = new FaceAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
