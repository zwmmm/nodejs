const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);
files.forEach(file => {
    if (!(file.endsWith('.js') && file !== 'index.js')) return;
    const maping = require(path.join(__dirname, file));
    for (let k in maping) {
        const methous = k.substr(0, 4);
        if (methous === 'GET ') {
            const pathName = k.substr(4);
            router.get(pathName, maping[k]);
        } else if (methous === 'POST') {
            const pathName = k.substr(5);
            router.post(pathName, maping[k]);
        }
    }
})

module.exports = router.routes();