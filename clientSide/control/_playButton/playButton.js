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
require("./playButton.css");
var React = require("react");
var vkui_1 = require("@vkontakte/vkui");
var icons_1 = require("@vkontakte/icons");
var context_1 = require("../../context");
var PlayButton = /** @class */ (function (_super) {
    __extends(PlayButton, _super);
    function PlayButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            icon: React.createElement(vkui_1.Spinner, null)
        };
        return _this;
    }
    PlayButton.prototype.componentDidMount = function () {
        var _this = this;
        var socket = this.context;
        console.log(socket);
        var videoPlayer = document.getElementById('videosrc');
        socket.onmessage = function (event) {
            var message = JSON.parse(event.data);
            switch (message.type) {
                case 'play':
                    if (message.data == 'play') {
                        videoPlayer.play();
                    }
                    ;
                    if (message.data == 'pause') {
                        videoPlayer.pause();
                    }
                    ;
                    break;
            }
        };
        videoPlayer.addEventListener('play', function (e) { _this.setState({ icon: React.createElement(icons_1.Icon48Pause, null) }); });
        videoPlayer.addEventListener('playing', function (e) { _this.setState({ icon: React.createElement(icons_1.Icon48Pause, null) }); });
        videoPlayer.addEventListener('pause', function (e) { _this.setState({ icon: React.createElement(icons_1.Icon48Play, null) }); });
        videoPlayer.addEventListener('canplay', function (e) { _this.setState({ icon: React.createElement(icons_1.Icon48Play, null) }); });
        videoPlayer.addEventListener('waiting', function (e) { _this.setState({ icon: React.createElement(vkui_1.Spinner, null) }); });
    };
    PlayButton.prototype.render = function () {
        var videoPlayer = document.getElementById('videosrc');
        var socket = this.context;
        function PlayButton(e) {
            var sendMes = {
                type: 'play',
                data: videoPlayer.paused ? 'play' : 'pause',
            };
            socket.send(JSON.stringify(sendMes));
            function changePlay() {
                if (videoPlayer.paused) {
                    videoPlayer.play();
                }
                else {
                    videoPlayer.pause();
                }
            }
            changePlay();
        }
        return (React.createElement(vkui_1.IconButton, { id: 'playButton', className: 'control_playButton', onClick: PlayButton.bind(this), icon: this.state.icon }));
    };
    PlayButton.contextType = context_1.socketContext;
    return PlayButton;
}(React.Component));
exports.PlayButton = PlayButton;
//# sourceMappingURL=playButton.js.map