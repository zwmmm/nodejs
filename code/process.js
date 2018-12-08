for (let i = 0, len = 10; i < 10; i++) {
    console.log(i);
}

process.on('exit', () => {
    console.log('执行结束');
})

process.nextTick(() => {
    console.log(10);
})

console.log(11);