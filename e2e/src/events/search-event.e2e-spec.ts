import { browser, element, by } from 'protractor';

describe('search a event', () => {
  it('Serch Result Check', async () => {
    await browser.get('/events');
    await element(by.name('searchTerm')).sendKeys('Angular');
    await element(by.css('form#searchForm > button')).click();
    const result = await element.all(by.css('a.list-group-item')).count();
    // console.log(result);
    expect(result).toBe(3);
  });
});

