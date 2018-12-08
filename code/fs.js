const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})

fs.readFile('user.png', (err, buff) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(buff.toString('utf-8'));
})

fs.stat('a.txt', (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})