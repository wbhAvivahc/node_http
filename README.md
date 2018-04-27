node http模块
====

* 创建一个服务

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