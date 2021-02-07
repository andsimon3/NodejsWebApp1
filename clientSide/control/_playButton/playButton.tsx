declare var require: any
import './playButton.css';
import * as React from 'react';
import { IconButton, Spinner } from '@vkontakte/vkui';
import { Icon48Play, Icon48Pause } from '@vkontakte/icons';
import { serverListener } from './../../serverListener';
import { room } from './../../room';


export class PlayButton extends React.Component<{}, {icon: any}> {
    constructor(props) {
        super(props);
        this.state = {
            icon: <Spinner />
        };
    }
    componentDidMount() {
        const videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;
        videoPlayer.addEventListener('play', (e) => { this.setState({ icon: <Icon48Pause /> }); });
        videoPlayer.addEventListener('playing', (e) => { this.setState({ icon: <Icon48Pause /> }); });
        videoPlayer.addEventListener('pause', (e) => { this.setState({ icon: <Icon48Play /> }); });
        videoPlayer.addEventListener('canplay', (e) => { this.setState({ icon: <Icon48Play /> }); });
        videoPlayer.addEventListener('waiting', (e) => { this.setState({ icon: <Spinner /> }); });
    }
    render() {
        const videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;
        function PlayButton(e: React.MouseEvent) {
            room.sendPlay();
            function changePlay() {
                if (videoPlayer.paused) { videoPlayer.play(); } else { videoPlayer.pause();}
            }
            changePlay();
        }
        return (
            <IconButton id='playButton' className='control_playButton' onClick={PlayButton.bind(this)} icon={this.state.icon} />
        )
    }
}