"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require('react-dom');
var vk_bridge_1 = require("@vkontakte/vk-bridge");
var videoPlayer_1 = require("./clientSide/videoPlayer/videoPlayer");
var header_1 = require("./clientSide/header/header");
var start_1 = require("./clientSide/room/start");
var chat_1 = require("./clientSide/room/chat");
require("@vkontakte/vkui/dist/vkui.css");
require("./clientSide/app.css");
var context_1 = require("./clientSide/context");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.websocketReady = false;
        _this.socket = new WebSocket("wss://user49056293-ndobqd3c.wormhole.vk-apps.com/");
        _this.state = {
            window: undefined
        };
        _this.socket.onopen = function (e) {
            _this.setState({ window: React.createElement(start_1.Set1, null) });
            _this.websocketReady = true;
            var qs = window.location.search.substr(1);
            var auth = {
                type: 'auth',
                param: qs,
            };
            _this.socket.send(JSON.stringify(auth));
        };
        _this.socket.onmessage = function (e) {
            console.log(e);
            var message = JSON.parse(e.data);
            console.log(message);
            switch (message.type) {
                case 'alert':
                    alert(message.data);
                    break;
                case 'joining':
                    alert(message.users + ' ' + message.roomId);
                    _this.setState({ window: React.createElement(chat_1.Chat, { roomId: message.roomId }) });
                    break;
            }
        };
        _this.socket.onclose = function (e) { console.log('ooops'); };
        return _this;
    }
    Main.prototype.componentDidMount = function () {
        //bridge.subscribe((e) => console.log(e));
        vk_bridge_1.default.send("VKWebAppInit", {});
        //let socket = new WebSocket("ws://localhost:1337");
    };
    Main.prototype.render = function () {
        return (React.createElement("div", { className: 'main vkui__root' },
            React.createElement(context_1.socketContext.Provider, { value: this.socket },
                React.createElement(header_1.Header, null),
                this.websocketReady ?
                    React.createElement("div", null,
                        React.createElement(videoPlayer_1.Video, null),
                        this.state.window) :
                    React.createElement("div", null, "Wait...")))); //ConnectSettings
    };
    return Main;
}(React.Component));
exports.Main = Main;
ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map