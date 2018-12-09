const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-type': 'text/html',
    })
    response.end('Hello word');
    fs.writeFile('request.txt', request, err => {
        console.log(err);
    })
})

server.listen(8080);

console.log('run', 'localhost:8080');