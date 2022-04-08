const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // const url = req.url;
    // res.end(url);

    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');

    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Hello World</h1>');

    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify([{ id: 1, name: 'BIL425' }]));

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});