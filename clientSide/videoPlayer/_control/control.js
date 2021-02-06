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
require("./control.css");
var React = require("react");
var down_1 = require("./../../control/_down/down");
var playButton_1 = require("./../../control/_playButton/playButton");
var icons_1 = require("@vkontakte/icons");
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            timerId: 0,
        };
        return _this;
    }
    Control.prototype.componentDidMount = function () {
        var leftSide = document.getElementById('timeBack');
        var rightSide = document.getElementById('timeForward');
        var videoPlayer = document.getElementById('videosrc');
        var that = this;
        var clickCount = 0;
        function timeIncrease(elem, num) {
            clickCount++;
            setTimeout(function () { clickCount -= 1; }, 350);
            if (clickCount >= 2) {
                clearTimeout(that.state.timerId);
                event.stopPropagation();
                videoPlayer.currentTime = videoPlayer.currentTime + num;
                elem.classList.add('up_skip__show');
                setTimeout(function () { elem.classList.remove('up_skip__show'); }, 1000);
            }
        }
        leftSide.addEventListener('click', function (e) { return timeIncrease(leftSide, -10); });
        rightSide.addEventListener('click', function (e) { return timeIncrease(rightSide, 10); });
    };
    Control.prototype.render = function () {
        function IsOneTap(event) {
            if (!document.getElementById('playButton').contains(event.target)) {
                clearTimeout(this.state.timerId);
                this.setState({
                    timerId: setTimeout(function () {
                        hideUI();
                    }, 350)
                });
            }
        }
        function hideUI() {
            var down = document.getElementById('controlDown');
            var playButton = document.getElementById('playButton');
            var control = document.getElementById('videoControl');
            down.style.display = (down.style.display == 'none') ? 'flex' : 'none';
            playButton.style.display = (playButton.style.display == 'none') ? 'flex' : 'none';
            control.classList.toggle('Video_control__grayed');
        }
        return (React.createElement("div", { id: 'videoControl', className: 'Video_control Video_control__grayed' },
            React.createElement("div", { className: 'control_up', onClick: IsOneTap.bind(this) },
                React.createElement("div", { className: 'up_skip', id: 'timeBack' },
                    React.createElement(icons_1.Icon24Replay10, null)),
                React.createElement(playButton_1.PlayButton, null),
                React.createElement("div", { className: 'up_skip', id: 'timeForward' },
                    React.createElement(icons_1.Icon24Forward10, null))),
            React.createElement(down_1.Down, null)));
    };
    return Control;
}(React.Component));
exports.Control = Control;
//# sourceMappingURL=control.js.map