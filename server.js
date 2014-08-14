var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000;
var IPADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
server = require('http').createServer(app);
server.listen(PORT, IPADDRESS);


app.get('/', function(req, res){
  res.sendfile('index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


