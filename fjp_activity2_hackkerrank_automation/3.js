// node 3.js --url=https://hackerrank.com --config=config.json
// www.hackerrank.com/test1-1634401728
let puppeteer = require("puppeteer");
let minimist = require("minimist");
let fs = require("fs");

let userid = "movieclips5997723@gmail.com";
let password = "Fezse4-wamqiz-qasveh";
let moderator = "navdeep_usict";
let urls = "https://hackerrank.com";

async function run() {
  let browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: {
      width: 1200,
      height: 800,
      isMobile: false,
    },
  });

  let pages = await browser.pages();
  let page = pages[0];
  await pages[0].goto(urls);

  await page.waitForSelector("a[data-event-action='Login']");
  await page.click("a[data-event-action='Login']");

  await page.waitForSelector("a[href='https://www.hackerrank.com/login']");
  await page.click("a[href='https://www.hackerrank.com/login']");

  await page.waitForSelector("input[name='username']");
  await page.type("input[name='username']", userid, { delay: 30 });

  await page.waitForSelector("input[name='password']");
  await page.type("input[name='password']", password, { delay: 30 });

  await page.waitForSelector("button[data-analytics='LoginPassword']");
  await page.click("button[data-analytics='LoginPassword']");

  await page.waitForSelector("a[href='/contests']");
  await page.click("a[href='/contests']");

  await page.waitForSelector("a[href='/administration/contests/']");
  await page.click("a[href='/administration/contests/']");

  await page.waitFor(3000);

  await page.waitForSelector("p.mmT");
  await page.click("p.mmT");

  await page.waitForSelector("li[data-tab='moderators']");
  await page.click("li[data-tab='moderators']");

  await page.waitForSelector("input#moderator");
  await page.type("input#moderator", moderator, { delay: 30 });

  await page.keyboard.press("Enter");

  // await page.waitFor(3000);

  //
}
run();
