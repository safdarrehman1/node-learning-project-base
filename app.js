// npm - global command, comes with node

const _ = require("lodash");
const item = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(item);
console.log(newItems);
