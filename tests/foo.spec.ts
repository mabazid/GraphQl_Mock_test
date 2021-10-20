import {test, expect} from '@playwright/test';


test('basic test', async ({page}) => {
    await page.goto('http://localhost:4200/');

    var votes = Number(await page.locator("body:nth-child(2) app:nth-child(1) app-list:nth-child(1) ul:nth-child(1) > li:nth-child(1)").getAttribute("value"));
    console.log(votes);
    await page.click('text=Upvote');
    await page.goto('http://localhost:4200/');

    var votesAfter = Number(await page.locator("body:nth-child(2) app:nth-child(1) app-list:nth-child(1) ul:nth-child(1) > li:nth-child(1)").getAttribute("value"));
    console.log(votesAfter);
    expect(votesAfter).toBe(votes+1);
    //await page.click('text=Introduction to GraphQL by Tom Coleman (5 votes) Upvote');
});
