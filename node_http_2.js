const http = require('http');

const server = http.Server()
server.on('request',function(req,res){
  res.writeHead(200,{
    'content-type': 'text/plain'
  });

  res.end('this is end');
});

server.listen(98,function(){
  console.log('listen port 98')
});

//其中req为http.IncomingMessage 的实例
/**
 * req = {
 *  data,end,close,method,headers,url,httpVersion
 * }
 */

 //其中res为http.ServerResponse的实例
/* 
 res = {writeHead,write,end}
*/

//http.request() 跟 http.get()方法返回一个http.ClientRequest()的实例。

/* 
  reponse  
  request.write()
  res.end(  )
*/