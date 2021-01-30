'use strict';
var path = require('path');
//var http = require('http');
var express = require('express');
var WebSocket = require('ws');
var signCheck = require('./serverSide/signCheck');
//const session = require('express-session');

var app = express();
//var server = http.createServer(app)

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);


const wss = new WebSocket.Server({
    noServer: true
});

var rooms = {};
var users = {};
wss.on('connection', (ws) => {
    
    //connection is up, let's add a simple simple event
    ws.on('message', (event) => {
        let message = JSON.parse(event);
        switch (message.type) {
            case 'auth':
                let vkId = signCheck(message.param);
                if (vkId != 0) {
                    users[vkId] = ws;
                    users[vkId].send(`u are ${vkId}`);
                    ws.newFunc = () => { ws.send(1); }
                    ws.newFunc();
                } else { ws.terminate(); }
            case 'create':

                rooms['']
                break;
		}
    });

});

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

server.on('upgrade', function upgrade(request, socket, head) {
    console.log(request);
    console.log(socket);
    console.log(head);
    // This function is not defined on purpose. Implement it with your own logic.
   /* authenticate(request, (err, client) => {
        if (err || !client) {
            socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
            socket.destroy();
            return;
        }

        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request, client);
        });
    });*/
});