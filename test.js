const fs = require("fs");

const test_1 = fs.readFileSync('test.html');

const test_2 = fs.readFileSync('test.html', 'utf8');

console.log(test_1);
console.log(test_2);