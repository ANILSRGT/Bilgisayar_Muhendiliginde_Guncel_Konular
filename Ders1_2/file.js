const fs = require('fs');
const path = require('path');
const { resolve } = require('path/posix');

// Read file
// fs.mkdirSync(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("dir created");

// });

// Remove file
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("dir removed");

// });

// Write File
// fs.writeFile(path.resolve(__dirname, "text.txt"), "Ali Veli 1 2 3", (err) => {
//     if (err) {
//         console.log(err);
//     }
//        // Append to file
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), "4 5 6", (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// });

// Promise
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }

        resolve();
    }));
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.readFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }

        resolve();
    }));
}

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data').then(() => {
//     return appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Merhaba');
// }).catch((err) => {
//     console.log(err);
// });

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message);
        }

        resolve();
    }));
}

const text = "BIL 4 2 5";

// yazdır okut, datayı uzunluk ,başka dosyaya yazdır ,remove

const readFileAsync = async (path) => {
    return new Promise((res, rej) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return rej(err.message);
        }

        res(data);
    }))
}

// writeFileAsync(path.resolve(__dirname, 'ders2_1.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, "ders2_1.txt")))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, "count.txt"), `file count ${count}`));

// const fsPromise = require('fs/promises')
const fsPromise = require('fs').promises;

const fileRead = async () => {
    try {
        await fsPromise.writeFile(path.resolve(__dirname, "text.txt"), 'data');
    } catch (error) {
        console.log(error.message);
    }
}