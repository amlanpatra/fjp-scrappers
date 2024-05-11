// node 1_HackerrankAutomation.js --url=https://www.hackerrank.com/ --config=config.json
let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");

let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.config, "utf-8");
let config = JSON.parse(configJSON);

// if using "await" function body must be in an async function
async function run() {
  let browser = await puppeteer.launch({ headless: false });
  let pages = await browser.pages();
  await pages[0].goto(args.url);
  await pages[0].screenshot({ path: "example.png" });
  browser.close();
}
run();

// let browserPromise = puppeteer.launch({ headless: false });
// browserPromise.then(function (browser) {
//   let pagesPromise = browser.pages();
//   pagesPromise.then(function (pages) {
//     let responsePromise = pages[0].goto(args.url);
//     responsePromise.then(function (response) {
//       let closePromise = browser.close();
//       closePromise.then(function () {
//         console.log("browser closed");
//       });
//     });
//   });
// });

// (async () => {
// 	let browser = await puppeteer.launch({headless:false});
// 	let page = await browser.newPage();
// 	await page.goto(args.url);
// 	await page.screenshot({path : "example.png"})
// })();
