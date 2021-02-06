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
var control_1 = require("./_control/control");
require("./videoPlayer.css");
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Video.prototype.componentDidMount = function () {
    };
    Video.prototype.render = function () {
        return (React.createElement("div", { className: 'Video' },
            React.createElement("video", { id: 'videosrc', src: 'src/1min.mp4', className: 'Video_video' }),
            React.createElement(control_1.Control, null)));
    };
    return Video;
}(React.Component));
exports.Video = Video;
//# sourceMappingURL=videoPlayer.js.map