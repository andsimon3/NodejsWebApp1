declare var require: any
import './timer.css';
import * as React from 'react';

export class Timer extends React.Component<{}, {now: string, dur: string}> {
    videoPlayer: HTMLMediaElement;
    hour: boolean;
    constructor(props) {
        super(props);
        this.state = {
            dur: '00:00',
            now: '00:00'
        };
    }
    componentDidMount() {
        function timeFormat(number: number, moreHours: boolean) {
                let result: string;
                let time = [, ,];
                number = Math.floor(number);
                time[0] = number % 60;
                time[1] = ((number - time[0]) % 3600) / 60;
                time[2] = (number - time[1] * 60 - time[0]) / 3600;
                if (time[0] < 10) { time[0] = '0' + time[0]; }
                if (time[1] < 10) { time[1] = '0' + time[1]; }
                if (time[2] < 10) { time[2] = '0' + time[2]; }
                if (moreHours) { result = time[2] + ':' + time[1] + ':' + time[0]; }
                else { result = time[1] + ':' + time[0];}
                return result;
         }
        const videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;
        videoPlayer.addEventListener('timeupdate', (e) => { this.setState({ now: timeFormat(videoPlayer.currentTime, this.hour) }) });
        videoPlayer.addEventListener('durationchange', (e) => {
            if (videoPlayer.duration >= 3600) { this.hour = true; } else { false; }
            this.setState({
                dur: timeFormat(videoPlayer.duration, this.hour),
                now: timeFormat(videoPlayer.currentTime, this.hour),
            })
        });
    }
    render() {
        return (
            <span className='control_timer' id='controlTimer'>
                {this.state.now}
                    <span className='timer_stick'> / </span>
                {this.state.dur}
            </span>
        )
    }
}