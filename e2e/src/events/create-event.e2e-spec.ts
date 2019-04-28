import { AppPage } from '.././app.po';
import { browser, logging, element, by, $ } from 'protractor';
import * as path from 'path';

describe('add new event', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  fit('Test Submit Form', async () => {

    const title = '座談會TEST';
    await browser.get('/events/new');
    await element(by.name('name')).sendKeys(title);
    await element(by.css('button.mat-icon-button')).click();
    await element(by.css('button.mat-calendar-period-button')).click();
    await element(by.css('button.mat-calendar-previous-button')).click();
    await element(by.cssContainingText('div.mat-calendar-body-cell-content', '1997')).click();
    await element(by.cssContainingText('div.mat-calendar-body-cell-content', 'DEC')).click();
    await element(by.cssContainingText('div.mat-calendar-body-cell-content', '31')).click();
    const date = await element(by.name('date')).getAttribute('value');

    await element(by.name('time')).sendKeys('早上');
    await element(by.name('price')).sendKeys('500');
    await element(by.name('address')).sendKeys('新北市新店區');
    await element(by.name('city')).sendKeys('新北市');
    await element(by.name('country')).sendKeys('台灣');
    await element(by.name('onlineUrl')).sendKeys('http://example.com');
    const imaPath = path.resolve('./e2e/src/assets/Protractor.png');
    await element(by.name('imageFile')).sendKeys(imaPath);
    await element(by.css('button.btn.btn-success')).click();

    const result = await browser.getCurrentUrl();
    console.log(result);
    // expect(result).toEqual('http://localhost:4200/events');

    const result2 = await element(by.cssContainingText('H2', title)).isPresent();
    console.log(title);
    console.log(result2);
    console.log(date);
    expect(result2).toBe(true);
  });

});

