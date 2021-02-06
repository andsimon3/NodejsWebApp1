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
require("./fullscreen.css");
var React = require("react");
var vkui_1 = require("@vkontakte/vkui");
var icons_1 = require("@vkontakte/icons");
var FullScreen = /** @class */ (function (_super) {
    __extends(FullScreen, _super);
    function FullScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            icon: React.createElement(icons_1.Icon24Fullscreen, null)
        };
        return _this;
    }
    FullScreen.prototype.componentDidMount = function () {
        var _this = this;
        document.addEventListener('fullscreenchange', function (event) {
            _this.setState({ icon: document.fullscreenElement ? React.createElement(icons_1.Icon24FullscreenExit, null) : React.createElement(icons_1.Icon24Fullscreen, null) });
        });
    };
    FullScreen.prototype.render = function () {
        function fullscreenChange() {
            if (!document.fullscreenElement) {
                document.getElementById('root').requestFullscreen();
            }
            else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        return (React.createElement(vkui_1.IconButton, { className: 'control_fullscreen', icon: this.state.icon, onClick: fullscreenChange }));
    };
    return FullScreen;
}(React.Component));
exports.FullScreen = FullScreen;
//# sourceMappingURL=fullscreen.js.map