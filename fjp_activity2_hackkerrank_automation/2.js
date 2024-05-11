// node 2.js --url=https://hackerrank.com --config=config.json
// node 2.js --url=https://www.hackerrank.com/auth/login --config=config.json
// movieclips5997723@gmail.com
// Fezse4-wamqiz-qasveh

let puppeteer = require("puppeteer");
let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);
let config = JSON.parse(fs.readFileSync(args.config, "utf-8"));
// console.log(config);

async function run() {
  let browser = await puppeteer.launch({
    headless: false,
    // args: ["--start-maximized"],
    defaultViewport: {
      width: 1200,
      height: 800,
      isMobile: false,
    },
  });
  let pages = await browser.pages();
  let page = pages[0];

  await page.goto(args.url);
  await page.waitForNavigation();

  await page.type("input[name='username']", "hello", { delay: 100 });

  await browser.clsoe();

  //   1
  //   1
  //   1

  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1
  //   1

  //   await pages[0].goto(args.url);
  //   await pages[0].waitForNavigation();

  //   await pages[0].click("div.cookie-btn-wrapper > button");
  //   await page[0].waitFor(3000);

  //   for (let i = 0; i < 3; i++) {
  //     await page[0].keyboard.press("Tab");
  //     await page[0].waitFor(1000);
  //   }

  //   await pages[0].click("li#menu-item-2887");
  //   await pages[0].waitForNavigation();
  //   // for class "."  for id "#"  for attribute "[]". Below one is css attribute selector
  //   await pages[0].click(
  //     "a.fl-button[href = 'https://www.hackerrank.com/login']"
  //   );
  //   await pages[0].waitForNavigation();

  //   await pages[0].waitFor(3000);

  //   await pages[0].keyboard.down("Tab");
  //   await pages[0].keyboard.down("Tab");
  //   await pages[0].keyboard.down("Tab");
  //   await pages[0].keyboard.down("Tab");
  //   await pages[0].keyboard.down("Tab");
  //   await pages[0].keyboard.type("movieclips5997723@gmail.com");

  //   await pages[0].click("button[data-analytics='LoginPassword']");
  //   await pages[0].type("input#input-1", "movieclips5997723@gmail.com", {
  //     delay: 20,
  //   });
  //   await pages[0].click("input#input-12");
  //   await pages[0].type("input#input-2", "Fezse4-wamqiz-qasveh", { delay: 20 });
  //   await pages[0].click("input#input-11");
  //   await pages[0].type(
  //     "input > 'Your username or email'",
  //     "movieclips5997723@gmail.com",
  //     {
  //       delay: 20,
  //     }
  //   );
  //   await pages[0].click("input.input");
  //   await pages[0].type("input#input-2", "Fezse4-wamqiz-qasveh", { delay: 20 });

  //   await pages[0].type("input[name=username]", "movieclips5997723@gmail.com");
  //   await pages[0].type("input[name=password]", "Fezse4-wamqiz-qasveh");

  //   await pages[0].click(
  //     "button.'ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled'"
  //   );

  //   browser.close();
}
run();
