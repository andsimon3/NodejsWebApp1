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
require("./timer.css");
var React = require("react");
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dur: '00:00',
            now: '00:00'
        };
        return _this;
    }
    Timer.prototype.componentDidMount = function () {
        var _this = this;
        function timeFormat(number, moreHours) {
            var result;
            var time = [, ,];
            number = Math.floor(number);
            time[0] = number % 60;
            time[1] = ((number - time[0]) % 3600) / 60;
            time[2] = (number - time[1] * 60 - time[0]) / 3600;
            if (time[0] < 10) {
                time[0] = '0' + time[0];
            }
            if (time[1] < 10) {
                time[1] = '0' + time[1];
            }
            if (time[2] < 10) {
                time[2] = '0' + time[2];
            }
            if (moreHours) {
                result = time[2] + ':' + time[1] + ':' + time[0];
            }
            else {
                result = time[1] + ':' + time[0];
            }
            return result;
        }
        var videoPlayer = document.getElementById('videosrc');
        videoPlayer.addEventListener('timeupdate', function (e) { _this.setState({ now: timeFormat(videoPlayer.currentTime, _this.hour) }); });
        videoPlayer.addEventListener('durationchange', function (e) {
            if (videoPlayer.duration >= 3600) {
                _this.hour = true;
            }
            else {
                false;
            }
            _this.setState({
                dur: timeFormat(videoPlayer.duration, _this.hour),
                now: timeFormat(videoPlayer.currentTime, _this.hour),
            });
        });
    };
    Timer.prototype.render = function () {
        return (React.createElement("span", { className: 'control_timer', id: 'controlTimer' },
            this.state.now,
            React.createElement("span", { className: 'timer_stick' }, " / "),
            this.state.dur));
    };
    return Timer;
}(React.Component));
exports.Timer = Timer;
//# sourceMappingURL=timer.js.map