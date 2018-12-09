const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((request, response) => {
    const pathName = url.parse(request.url).pathname;
    if (pathName === '/') {
        const filePath = path.join(__dirname, '../file/index.html');
        console.log(filePath);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                response.writeHead(404);
                response.end('404 not fount');
                return;
            }
            fs.createReadStream(filePath).pipe(response);
        })
    } else {
        const filePath = path.join(__dirname, '../file', pathName);
        console.log(filePath);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.log(err);
                response.writeHead(404);
                response.end('404 not fount');
                return;
            }
            if (stats.isFile()) {
                response.writeHead(200);
                fs.createReadStream(filePath).pipe(response);
                return;
            }
        })
    }
})

server.listen(8080);

console.log('run', 'localhost:8080');