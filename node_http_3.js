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

server.listen(98,function(){
  console.log('Server running at http://127.0.0.1:98');
})