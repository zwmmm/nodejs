## global 
> node中的全局对象，类似与浏览器中的window

## process
> node的进程对象，可以使用这个切换路径

    - process.version 版本号
    - process.cwd 输出文件路径
    - process.chdir('/') 切换路径，类似于linux命令行上的 cd
    - process.nextTick(function () {
        console.log('异步执行');
        我暂时的理解和setTimeout(() => {}, 0)一个效果
    })
    - process.on('exit', function (code) {
        程序在结束的时候执行的回调,会等待所有的事件执行结束包括异步的
    });

## fs
> 操作文件的模块，所有的api有同步版本和异步版本，同步版本以Sync结尾，并且结果直接返回，需要使用try catch来捕获错误，异步版本会有一个回调函数，第一个参数未err第二个参数为data

    - fs.readFile 读文件,读取文本文件的时候直接返回字符串，读取二进制文件(图片，媒体)返回的是buffer对象
    - fs.writeFile 写文件
    - fs.stat 读取文件详情(文件大小，创建时间，修改时间等)返回的是一个[stat对象](./stat.md)