var proxy=require('http-proxy').createProxyServer({});

proxy.on(function(err,req,res){

res.writeHead(500,{

'Content-Type':'text/plain'

});

});

var server=require('http').createServer(function(req,res){

var host= req.headers.host;

console.log('host:'+host);

switch(host){

case 'www.cyan_wang.com':
console.log('www.cyan_wang.com');
proxy.web(req,res,{target:'http://localhost:3000'});

break;

case 'cyan_wang.com':
    
console.log('cyan_wang.com');
proxy.web(req, res, { target: 'http://localhost:4030' });

break;

default:

res.writeHead(200, {

'Content-Type': 'text/plain'

});

res.end('Welcome to my server!');
}

});

console.log("listening on port 80")
server.listen(80);