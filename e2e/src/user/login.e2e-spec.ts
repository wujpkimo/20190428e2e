import { AppPage } from '.././app.po';
import { browser, logging, element, by, $ } from 'protractor';

describe('the user try to login', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Test Login Page', () => {
    browser.get('http://localhost:4200/user/login');
    const result = element(by.css('ng-component > h1')).getText() as Promise<string>;
    expect(result).toEqual('登入');
  });

  it('Test Login Page for Login Success', async () => {
    await browser.get('http://localhost:4200/user/login');
    await element(by.css('input#userName')).sendKeys('John');
    await element(by.css('input#password')).sendKeys('123456');
    await $('span > button[type="submit"]').click();
    const result = await browser.getCurrentUrl();
    console.log(result);
    expect(result).toEqual('http://localhost:4200/events');
  });

  it('Test Login Page for Login Fail Url', async () => {
    await browser.get('http://localhost:4200/user/login');
    await element(by.name('userName')).sendKeys('John');
    await element(by.name('password')).sendKeys('4444444');
    await element(by.buttonText('登入')).click();
    // const isAlertPresent = await element(by.className('alert-danger')).isPresent();
    // console.log(isAlertPresent);
    // expect(isAlertPresent).toBe(true, '錯誤密碼案例驗證失敗');
    const result = await browser.getCurrentUrl();
    console.log(result);
    expect(result).toEqual('http://localhost:4200/user/login');
  });

  it('Test Login Page for Login Fail Msg', async () => {
    await browser.get('http://localhost:4200/user/login');
    await element(by.css('input#userName')).sendKeys('John');
    await element(by.css('input#password')).sendKeys('4444444');
    await $('span > button[type="submit"]').click();
    const result = await $('ng-component > div > div').getText();
    console.log(result);
    expect(result).toEqual('錯誤的帳號密碼');
  });


  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
