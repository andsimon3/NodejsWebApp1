"use strict";
/*const videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;

export function serverListener(socket) {
    socket.onmessage = (event) => {
        let message = JSON.parse(event.data);
        switch (message.type) {
            case 'play':
                if (message.data == 'play') { videoPlayer.play() };
                if (message.data == 'pause') { videoPlayer.pause() };
                break;
            case 'alert':
                alert(message.data);
                break;
            case 'joining':
                alert(message.users + ' ' + message.roomId)
                this.setState({ window: <Chat roomId={message.roomId} /> })
                break;
        }
    };
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var serverListener = /** @class */ (function () {
    function serverListener() {
        var _this = this;
        this.socket = new WebSocket("wss://user49056293-amuj4q4k.wormhole.vk-apps.com");
        this.socket.onopen = function (e) {
            var qs = window.location.search.substr(1);
            var auth = {
                type: 'auth',
                param: qs,
            };
            _this.socket.send(JSON.stringify(auth));
        };
        this.socket.onmessage = function (e) {
            console.log(e);
            var message = JSON.parse(e.data);
            console.log(message);
            switch (message.type) {
                case 'alert':
                    alert(message.data);
                    break;
                case 'joining':
                    alert(message.users + ' ' + message.roomId);
                    //this.setState({ window: <Chat roomId={message.roomId} /> })
                    break;
            }
        };
        this.socket.onclose = function (e) { console.log('ooops'); };
    }
    serverListener.prototype.sendPlay = function () {
        var sendMes = {
            type: 'play',
        };
        this.socket.send(JSON.stringify(sendMes));
    };
    return serverListener;
}());
exports.serverListener = serverListener;
//# sourceMappingURL=serverListener.js.map