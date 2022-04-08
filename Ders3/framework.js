const http = require('http');

const EventEmitter = require('events');
const emitter = new EventEmitter();

class Router {
    constructor() {
        this.endpoints = {};
    }

    request(method = "GET", path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {};
        }

        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw new Error('');
        }

        endpoint[method] = handler;

        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res);
        });
    }

    get(path, handler) {
        this.request("GET", path, handler);
    }

    post(path, handler) {
        this.request("POST", path, handler);
    }
}

const router = new Router();

router.get('/users', (req, res) => {
    res.end('Send reqyest /users');
});

const PORT = 3000;

const server = http.createServer((req, res) => {
    // res.end(req.url);

    emitter.emit(`[${path}]:[${method}]`, req, res);
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));