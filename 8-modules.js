const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

// const amount = 8;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }
// console.log("this is my first code of node js !!!");
// console.log(__dirname);
// console.log(__filename);
// setInterval(() => {
//   console.log("this is my first code WOW");
// }, 1000);
// console.log(__dirname);
// setInterval(() => {
//   console.log("this is my first code WOW");
//   console.log(__dirname);
//   console.log(__filename);
// }, 1000);

// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const accessData = require("./6-alternative-flavor");
require("./7-mind-grenade");
sayHi("Safdar");
sayHi(names.haider);
sayHi(names.talha);
