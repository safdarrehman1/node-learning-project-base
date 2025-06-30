const path = require("path");

console.log(path.sep);
// Path separator
const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

// Base name of the file
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
