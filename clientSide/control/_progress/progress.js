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
require("./progress.css");
var React = require("react");
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.componentDidMount = function () {
        var progressLine = document.getElementById('progressLine');
        var videoPlayer = document.getElementById('videosrc');
        var lineNow = document.getElementById('lineNow');
        progressLine.addEventListener('mousedown', function (e) {
            var x = e.offsetX;
            var percent = x / progressLine.getBoundingClientRect().width;
            lineNow.style.width = (percent * 100) + '%';
            videoPlayer.currentTime = percent * videoPlayer.duration;
        });
        videoPlayer.addEventListener('timeupdate', function (e) {
            var percent = videoPlayer.currentTime / videoPlayer.duration;
            lineNow.style.width = (percent * 100) + '%';
        });
    };
    Progress.prototype.render = function () {
        return (React.createElement("div", { className: 'control_progress' },
            React.createElement("div", { className: 'progress_clickable', id: 'progressLine' },
                React.createElement("div", { className: 'progress_line' },
                    React.createElement("div", { id: 'lineNow', className: 'line_now' })))));
    };
    return Progress;
}(React.Component));
exports.Progress = Progress;
//# sourceMappingURL=progress.js.map