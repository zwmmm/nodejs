const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './file/a.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})

fs.readFile(path.join(__dirname, './file/user.png'), (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(buff.toString('utf-8'));
})

fs.stat(path.join(__dirname, './file/a.txt'), (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})