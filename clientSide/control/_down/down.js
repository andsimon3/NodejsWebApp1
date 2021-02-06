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
require("./down.css");
var React = require("react");
var timer_1 = require("./../_timer/timer");
var fullscreen_1 = require("./../_fullscreen/fullscreen");
var settings_1 = require("./../_settings/settings");
var progress_1 = require("./../_progress/progress");
var Settings_1 = require("./../../Settings/Settings");
var Down = /** @class */ (function (_super) {
    __extends(Down, _super);
    function Down() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Down.prototype.render = function () {
        return (React.createElement("div", { className: 'control_down', id: 'controlDown' },
            React.createElement("div", { className: 'down_up' },
                React.createElement(timer_1.Timer, null),
                React.createElement("div", { className: 'up_space' }),
                React.createElement(settings_1.SettingsButton, null),
                React.createElement(fullscreen_1.FullScreen, null)),
            React.createElement("div", { className: 'down_down' },
                React.createElement(progress_1.Progress, null)),
            React.createElement(Settings_1.Settings, null)));
    };
    return Down;
}(React.Component));
exports.Down = Down;
//# sourceMappingURL=down.js.map