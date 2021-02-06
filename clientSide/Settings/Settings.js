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
require("./Settings.css");
var vkui_1 = require("@vkontakte/vkui");
var icons_1 = require("@vkontakte/icons");
var video_1 = require("./_video/video");
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        return (React.createElement("div", { className: 'main_Settings' },
            React.createElement("div", { className: 'Settings_header' },
                React.createElement("h1", null, "Settings / Video"),
                React.createElement("div", { className: 'header_space' }),
                React.createElement(vkui_1.IconButton, { icon: React.createElement(icons_1.Icon24Cancel, null) })),
            React.createElement("div", { className: 'Settings_menu' },
                React.createElement(vkui_1.IconButton, { icon: React.createElement(icons_1.Icon24Play, null) }),
                React.createElement(vkui_1.IconButton, { icon: React.createElement(icons_1.Icon24Home, null) }),
                React.createElement(vkui_1.IconButton, { icon: React.createElement(icons_1.Icon24Search, null) })),
            React.createElement("div", { className: 'Settings_main' },
                React.createElement(video_1.VideoSettings, null))));
    };
    return Settings;
}(React.Component));
exports.Settings = Settings;
//# sourceMappingURL=Settings.js.map