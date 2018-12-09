## global 
> node中的全局对象，类似与浏览器中的window

## process
> node的进程对象，可以使用这个切换路径

    * process.version 版本号
    * process.cwd 输出文件路径
    * process.chdir('/') 切换路径，类似于linux命令行上的 cd
    * process.nextTick(function () {
        console.log('异步执行');
        我暂时的理解和setTimeout(() => {}, 0)一个效果
    })
    * process.on('exit', function (code) {
        程序在结束的时候执行的回调,会等待所有的事件执行结束包括异步的
    });

## fs
> 操作文件的模块，所有的api有同步版本和异步版本，同步版本以Sync结尾，并且结果直接返回，需要使用try catch来捕获错误，异步版本会有一个回调函数，第一个参数未err第二个参数为data

    * fs.readFile 读文件,读取文本文件的时候直接返回字符串，读取二进制文件(图片，媒体)返回的是[buffer对象](https://github.com/zwmmm/nodejs/blob/master/doc/buffer.md)
    * fs.writeFile 写文件
    * fs.stat 读取文件详情(文件大小，创建时间，修改时间等)返回的是一个[stat对象](https://github.com/zwmmm/nodejs/blob/master/doc/stat.md)

## http
> 创建web服务器模块

1. 静态方法
    - createServer(callback) 创建一个服务 参数是一个回调函数，包含request和response两个对象
    - listen(port) 监听哪个端口号

## url
> 将字符串解析成url对象，类似于location对象

1. url.parse(string) 将url字符串转成url对象
```
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' 
}
```

## path
> 处理路径，由于在服务器上不能直接使用相对路径

1. path.join() 拼接路径
2. path.basename(path) 返回文件路径下对于的文件名(实际上就是最后一节)
3. path.dirname(path) 返回当前路径的文件夹路径
4. path.extname(path) 返回路径.后面的值，可以用来获取文件的后缀名
5. path.parse(path) 将path转成path对象
6. path.format(path对象) 将path对象转成path

tips: 经常和__dirname一起使用

## crypto
> 加密算法模块，提供了很多加密的方法

