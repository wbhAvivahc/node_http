node http模块
====

服务器端创建服务
---
* 方式1
```
const http = require('http')  //将http模块引进来

const server = http.createServer(  //创建一个服务
  function(req,res){
    res.writeHead(200, {
      'content-type' : 'text/plain'
    });

    res.end('hello Node.js')
  }
);

server.listen(3000,function(){
  console.log('listen')
})
```

creatServer 返回基于http模块的一个基于事件的http服务器    

res 为http.IncomingMessage 的实例  
req 为 http.ServerResponse的实例  

http.Server = { request(res,req),connection,close}三个事件  

http.createServer() 其实是添加了一个request事件监听  
* 方式2
```
const server = http.Server();
server.on('request',function(req,res){
  res.writeHead(200,{
    'content-type': 'text/plain'
  });
  res.write('this is write!')
  res.end('this is end');
});
```

* http.request(req,res)  
>> req 为http.IncomingMessage 的实例 包含{data,end,close}三个事件,{url,method,headers,httpVersion}等属性

```
const http = require('http');

const server = http.createServer(function(req,res){
  let url = req.url,
      headers = req.headers,
      httpVersion = req.httpVersion,
      method = req.method;

  res.writeHead(200,{
    'content-type': 'text/plain'
  });

  res.end('url:'+ url + 'headers:'+ headers + 'httpVersion:' + httpVersion + 'method:' + method)
})
```

客户端
----

* http.request()

包含option: {host,port,method,path,headers}

* http.get()

```
const http = require('http');
let reqData = '';

http.request(
  {
    'host' : '127.0.0.1',
    port: '98',
    method: 'get'
  },
  function(res){
    res.on('data',function(chunk){
      reqData += chunk;
    });

    res.end(reqData);
  }
)
```

在网络层:有IP协议、ICMP协议、ARP协议、RARP协议和BOOTP协议。  
在传输层:中有TCP协议与UDP协议。  
在应用层:有FTP、HTTP、TELNET、SMTP、DNS等协议。  