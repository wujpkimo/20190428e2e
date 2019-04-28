import { browser, logging, element, by, $ } from 'protractor';


describe('the user submit a questionnaire', () => {
  it('test for success contain text', async () => {
    await browser.get('labs/questionnaire');
    await element(by.name('username')).sendKeys('John');
    await element(by.name('codeLanguage')).sendKeys('C#');
    await element(by.css('button#add')).click();
    const result = await element(by.css('.ng-valid')).getText();
    console.log(result);
    expect(result).toContain('送出成功');
  });
});
