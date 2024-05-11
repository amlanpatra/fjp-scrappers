// node 3.js --url=https://hackerrank.com --config=config.json
// www.hackerrank.com/test1-1634401728
let puppeteer = require("puppeteer");
let minimist = require("minimist");
let fs = require("fs");

let userid = "movieclips5997723@gmail.com";
let password = "Fezse4-wamqiz-qasveh";
let moderator = "navdeep_usict";
let urls = "https://chartink.com/screener/15min-dojo-at-top";

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

  page.waitFor(3000);
  //   await page.waitForSelector(
  //     "button.btn btn-default buttons-copy buttons-html5 btn-primary"
  //   );
  //   await page.click(
  //     "button.btn btn-default buttons-copy buttons-html5 btn-primary"
  //   );
  await page.waitForSelector("span[Copy]");
  await page.click("span[Copy]");

  page.waitFor(3000);
  browser.close();
}

run();
