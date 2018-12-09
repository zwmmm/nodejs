## Buffer
> 处理二进制数据流

1. Buffer.from 创建buffer
2. Buffer.alloc(size, fill, encoding) 创建一个指定字节数的buffer默认用0填充, 如果fill的长度大于size会被截断，小于size则会被repeat
3. Buffer.concat 合并buffer
4. Buffer.compare 比较数组
5. Buffer.byteLength 返回buffer的实际字节数
6. Buffer.isBuffer 判断是不是Buffer

## 原型方法
1. toString(encoding) 转成字符串
