const os = require("os");

console.log(os.platform());

// console.log(os.arch());

console.log(os.cpus());
console.log(os.cpus().length);

// console.log(os.hostname());

for (let i = 0; i < os.cpus().length - 2; i++) {

}