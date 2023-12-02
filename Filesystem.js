const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });
// const a = fs.readFileSync("file.txt");
// console.log(a.toString());

// console.log("read execution finished"); //non blocking io model

// fs.writeFile("file.txt", "this is new overridden data", () => {
//   console.log("written to the file");
// });

const b = fs.writeFileSync("file.txt", "this is the new data of filesync");
console.log(b);
console.log("finishde writing to the file");
