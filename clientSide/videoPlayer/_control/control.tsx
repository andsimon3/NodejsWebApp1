declare var require: any
import './control.css';
import * as React from 'react';
import { Down } from './../../control/_down/down';
import { PlayButton } from './../../control/_playButton/playButton';
import { Icon24Replay10, Icon24Forward10 } from '@vkontakte/icons';

export class Control extends React.Component<{}, { timerId: number}> {
    constructor(props) {
        super(props);
        this.state = {
            timerId: 0,
        }
    }
    that: any;
    count: number;
    componentDidMount() {
        let leftSide = document.getElementById('timeBack');
        let rightSide = document.getElementById('timeForward');
        let videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;
        let that = this;
        let clickCount: number = 0;
        function timeIncrease(elem: HTMLElement, num: number) {
            clickCount++;
            setTimeout(() => { clickCount -= 1 }, 350);
            if (clickCount >= 2) {
                clearTimeout(that.state.timerId);
                event.stopPropagation();
                videoPlayer.currentTime = videoPlayer.currentTime + num;
                elem.classList.add('up_skip__show');
                setTimeout(() => { elem.classList.remove('up_skip__show') }, 1000);
            }
        }
        leftSide.addEventListener('click', (e) => timeIncrease(leftSide, -10));
        rightSide.addEventListener('click', (e) => timeIncrease(rightSide, 10));
    }
    render() {
        function IsOneTap(event: Event) {
            if (!document.getElementById('playButton').contains(event.target as Node)) {
                clearTimeout(this.state.timerId);
                this.setState({
                    timerId: setTimeout(() => {
                        hideUI();
                    }, 350)
                })
            }
        }
        function hideUI() {
            let down = document.getElementById('controlDown');
            let playButton = document.getElementById('playButton');
            let control = document.getElementById('videoControl');
            down.style.display = (down.style.display == 'none') ? 'flex' : 'none';
            playButton.style.display = (playButton.style.display == 'none') ? 'flex' : 'none';
            control.classList.toggle('Video_control__grayed');
        }
        return (
            <div id='videoControl' className='Video_control Video_control__grayed'>
                <div className='control_up' onClick={IsOneTap.bind(this)} >
                    <div className='up_skip' id='timeBack'><Icon24Replay10 /></div>
                        <PlayButton />
                    <div className='up_skip' id='timeForward'><Icon24Forward10/></div>
                </div>
                <Down />
            </div>
        )
    }
}