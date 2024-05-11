// node Cricinfo.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");

let args = minimist(process.argv);

// donwload using axios
// read using jsdom
// make excel using excel4node
// make pdf using pdf-lib

let responseKaPromise = axios.get(args.source);
responseKaPromise
  .then(function (response) {
    let html = response.data;

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let matches = [];
    let matchScoreDivs = document.querySelectorAll("div.match-score-block");
    for (let i = 0; i < matchScoreDivs.length; i++) {
      let match = {};

      let namePs = matchScoreDivs[i].querySelectorAll("p.name");
      match.t1 = namePs[0].textContent;
      match.t2 = namePs[1].textContent;

      let scoreSpans = matchScoreDivs[i].querySelectorAll(
        "div.score-detail > span.score"
      );
      if (scoreSpans.length == 2) {
        match.t1s = scoreSpans[0].textContent;
        match.t2s = scoreSpans[1].textContent;
      } else if (scoreSpans.length == 1) {
        match.t1s = scoreSpans[0].textContent;
        match.t2s = "";
      } else {
        match.t1s = "";
        match.t2s = "";
      }

      let spanResult = matchScoreDivs[i].querySelector(
        "div.status-text > span"
      );
      match.result = spanResult.textContent;

      matches.push(match);
      // console.log(i);
    }
    // console.log(matches);
    fs.writeFileSync("teams.json", JSON.stringify(matches), "utf-8");
  })
  .catch(function (err) {
    console.log(err);
  });

let new_team = JSON.parse(fs.readFileSync("teams.josn", "utf-8"));
for (let i = 0; i < new_team.length; i++) {
  console.log(new_team[i].ti);
}
