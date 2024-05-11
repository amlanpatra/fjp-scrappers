let fs = require("fs");

let team = fs.readFileSync("teams.json", "utf-8");
let new_team = JSON.parse(team);
for (let i = 0; i < new_team.length; i++) {
  console.log(new_team[i].t1);
  console.log(new_team[i].t2);
}
