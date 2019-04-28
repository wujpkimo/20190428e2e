import { AppPage } from './app.po';
import { browser, logging, element, by, $ } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    // page.navigateTo();
    browser.get(browser.baseUrl);
    const result = element(by.css('div.navbar-header > a')).getText() as Promise<string>;
    expect(result).toEqual('Protractor 訓練營');
  });



  it('should display title 建立活動', () => {
    // page.navigateTo();
    browser.get('http://localhost:4200/events/new');
    const result = element(by.css('ng-component > h1')).getText() as Promise<string>;
    expect(result).toEqual('建立活動');
  });

  it('should display title 建立活動 by like Jquery', () => {
    // page.navigateTo();
    browser.get('http://localhost:4200/events/new');
    const result = $('ng-component > h1').getText() as Promise<string>;
    expect(result).toEqual('建立活動');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
