var http = require('http');

const server = http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World\n');
})

server.listen(3000,function(){
  console.log('Server running at http://127.0.0.1:3000');
})



