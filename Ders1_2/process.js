const dotenv = require('dotenv');
dotenv.config();

// console.log(process.pid);
// console.log(process.env.PORT);

console.log(process.argv);

process.on('exit', (code) => {
    console.log(code);
});