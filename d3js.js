const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("versionTableProjet.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
  });


var svg = d3.select("#svg1").append("svg");
svg.append("rect")
.attr("x",20)
.attr("y",20)
.attr("width",200)
.attr("height",50);
