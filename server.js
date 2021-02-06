'use strict';
var path = require('path');
//var http = require('http');
var express = require('express');
var WebSocket = require('ws');
var signCheck = require('./serverSide/signCheck');
//const session = require('express-session');
const numSystem = require('./serverSide/convertNumSystem');
var app = express();
//var server = http.createServer(app)

var staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);
//!
const wss = new WebSocket.Server({
    noServer: true
});

var rooms = {};
var users = {};

wss.on('connection', (ws) => {
    console.log('user connected. Online: ' + wss.clients);
    let id = setTimeout(() => { ws.close(); }, 5000);
    //connection is up, let's add a simple simple event
    ws.on('message', (event) => {
        let message = JSON.parse(event);
        console.log(message);
        let answer;
        switch (message.type) {
            case 'auth':
                let vkId = signCheck(message.param);
                if ((vkId != null) & !(vkId in users)) {//in prod null to 0 
                    clearTimeout(id);
                    users[vkId] = ws;
                    users[vkId].send(JSON.stringify({ type: 'alert', data: vkId }));
                    ws.newFunc = () => { ws.send(1); }
                    ws.vkId = vkId;
                    ws.on('close', (e) => {
                        delete users[vkId];
                        console.log('user disconnected. Online: ' + users);
                    });
                }
                break;
            case 'create':
                let roomNumId = 0;
                let roomId;
                do {
                    roomId = numSystem(roomNumId);
                    roomNumId++;
                }
                while (roomId in rooms)
                rooms[roomId] = { users: [ws.vkId] };
                ws.on('close', (e) => {
                    delete rooms[roomId];
                });
                answer = {
                    type: 'joining',
                    roomId: roomId,
                    users: rooms[roomId].users,
                    role: 'host'
                }
                ws.room = roomId;
                ws.send(JSON.stringify(answer));
                console.log(rooms);
                break;
            case 'join':
                if (message.roomId in rooms) {
                    rooms[message.roomId].users.push(ws.vkId);
                    ws.on('close', (e) => {
                        delete rooms[message.roomId];
                    });                
                answer = {
                    type: 'joining',
                    roomId: message.roomId,
                    users: rooms[message.roomId].users,
                    role: 'guest'
                    };
                    ws.room = message.roomId;
                    ws.send(JSON.stringify(answer));
                }
                break;
            case 'message':
                answer = {
                    type: 'newMessage',
                    data: message.data,
                }
                rooms[ws.room].users.forEach((userId) => { users[userId].send(JSON.stringify(answer)) })
                break;
            case 'play':
                answer = {
                    type: 'play',
                    data: message.data,
                }
                rooms[ws.room].users.forEach((userId) => { users[userId].send(JSON.stringify(answer)) })
                break;
		}
    });

});

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

server.on('upgrade', function upgrade(request, socket, head) {
    wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
    });
});