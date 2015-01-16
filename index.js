var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.use('/bower_components' , express.static(__dirname + '/bower_components'));

app.get('/' , function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection' , function(socket){

	socket.on('connect' , function(msg){
		console.log(msg)
	});

	socket.on('chat message' , function(msg){
		io.emit('chat message', msg);
	});

	socket.on('a' , function(msg){
		io.emit('a' , msg);
	})
});

http.listen(3000 , function(){
	console.log('server start');
});
