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

  await page.waitForSelector("a.backbone.block-center");
  let curls = await page.$$eval("a.backbone.block-center", function (atags) {
    let urls2 = [];

    for (let i = 0; i < atags.length; i++) {
      let url = atags[i].getAttribute("href");
      urls2.push(url);
    }
    return urls2;
  });
  console.log(curls);

  for (let i = 0; i < curls.length; i++) {
    let curl = curls[i];
    let ctab = await browser.newPage();
    handleContest(ctab, urls + curl, moderator);
  }
  browser.close();
}
async function handleContest(ctab, urls, moderator) {
  //   let ctab = await browser.newPage();
  //   await ctab.goto(urls + curl);
  await ctab.goto(urls);

  await ctab.bringToFront();
  await ctab.waitFor(3000);

  await ctab.waitForSelector("li[data-tab='moderators']");
  await ctab.click("li[data-tab='moderators']");

  await ctab.waitForSelector("input#moderator");
  await ctab.type("input#moderator", moderator, { delay: 30 });

  await ctab.keyboard.press("Enter");
  await ctab.waitFor(5000);
  await ctab.close();
  await ctab.waitFor(1000);
  console.log(curl);
}

run();
