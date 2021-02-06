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
var context_1 = require("../context");
var Set1 = /** @class */ (function (_super) {
    __extends(Set1, _super);
    function Set1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Set1.prototype.render = function () {
        var socket = this.context;
        function createRoom() {
            var text = {
                type: 'create',
            };
            socket.send(JSON.stringify(text));
        }
        function joinRoom() {
            var text = {
                type: 'join',
                roomId: document.getElementById('test').value
            };
            socket.send(JSON.stringify(text));
        }
        return (React.createElement("div", null,
            React.createElement("input", { type: 'text', name: 'room_code', id: 'test' }),
            React.createElement("button", { onClick: function (e) { return joinRoom(); } }, "Go"),
            React.createElement("button", { onClick: function (e) { return createRoom(); } }, "Create")));
    };
    Set1.contextType = context_1.socketContext;
    return Set1;
}(React.Component));
exports.Set1 = Set1;
//# sourceMappingURL=start.js.map