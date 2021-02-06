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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var context_1 = require("../context");
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            messages: [],
        };
        return _this;
    }
    Chat.prototype.render = function () {
        var _this = this;
        var socket = this.context;
        function send() {
            var answer = {
                type: 'message',
                data: document.getElementById('test').value,
            };
            socket.send(JSON.stringify(answer));
        }
        socket.onmessage = function (event) {
            var message = JSON.parse(event.data);
            switch (message.type) {
                case 'newMessage':
                    _this.setState({ messages: __spreadArrays(_this.state.messages, [message.data]) });
                    break;
            }
            ;
        };
        return (React.createElement("div", null,
            React.createElement("p", null, this.props.roomId),
            React.createElement("br", null),
            React.createElement("div", null, this.state.messages.join('\n ')),
            React.createElement("input", { type: 'text', name: 'room_code', id: 'test' }),
            React.createElement("button", { onClick: function (e) { return send(); } }, "Go")));
    };
    Chat.contextType = context_1.socketContext;
    return Chat;
}(React.Component));
exports.Chat = Chat;
//# sourceMappingURL=chat.js.map