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
require("./settings.css");
var React = require("react");
var vkui_1 = require("@vkontakte/vkui");
var icons_1 = require("@vkontakte/icons");
var SettingsButton = /** @class */ (function (_super) {
    __extends(SettingsButton, _super);
    function SettingsButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsButton.prototype.render = function () {
        function settingsOpen() {
            if (!document.fullscreenElement) {
                document.getElementById('root').requestFullscreen();
            }
            else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        return (React.createElement(vkui_1.IconButton, { className: 'control_settings', icon: React.createElement(icons_1.Icon24Settings, null), onClick: settingsOpen }));
    };
    return SettingsButton;
}(React.Component));
exports.SettingsButton = SettingsButton;
//# sourceMappingURL=settings.js.map