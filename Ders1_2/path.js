const path = require('path');

console.log(path.join('first', 'second')); // first/second

console.log(path.join(__dirname, '..',));  // dirname -> tam sayfa uzantısı

console.log(path.resolve('first')); // tam sayfa uzantısı

console.log(path.resolve('/first', 'second')); // D:/first/second -> ana dizine ekleme

const fullPath = path.resolve("first.jpeg"); // D:/first.jpeg
console.log(path.basename(fullPath)); // first.jpeg
console.log(path.extname(fullPath)); // .jpeg -> dosya uzantısı

const pageURL = "http://localhost:9001/user?id=400";
const url = new URL(pageURL);
console.log(url);
