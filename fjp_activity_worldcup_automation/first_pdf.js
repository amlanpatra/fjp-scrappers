//node first_pdf.js --source=teams.json --dest=worldcup
//node FirstWritingPDF.js --source=teams.json --dest=worldcup

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");
// const { createSecureContext } = require("tls");
let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);
fs.mkdirSync(args.dest); //eta diye root folder banachi

//
for (let i = 0; i < teams.length; i++) {
  let teamFN = path.join(args.dest, teams[i].name);
  fs.mkdirSync(teamFN);

  for (let j = 0; j < teams[i].matches.length; j++) {
    let matchFileName = path.join(teamFN, teams[i].matches[j].vs + ".pdf");
    createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
  }
}

function createScoreCard(teamName, match, matchFileName) {
  let t1 = teamName;
  let t2 = match.vs;
  let result = t1 + " " + match.result;

  let bytesOfPdf = fs.readFileSync("Template.pdf");
  let pdfdoc = pdf.PDFDocument.load(bytesOfPdf);
  pdfdoc.then(function (pdfDOC) {
    let page = pdfDOC.getPage(0);

    page.drawText(t1, {
      x: 320,
      y: 720,
      size: 10,
    });
    page.drawText(t2, {
      x: 320,
      y: 700,
      size: 10,
    });
    page.drawText(result, {
      x: 320,
      y: 676,
      size: 10,
    });

    let finalPdf = pdfDOC.save();
    finalPdf.then(function (finalPdf) {
      fs.writeFileSync(matchFileName, finalPdf);
    });
  });
}
