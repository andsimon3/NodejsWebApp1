declare var require: any
import './progress.css';
import * as React from 'react';

export class Progress extends React.Component {
    componentDidMount() {
        let progressLine = document.getElementById('progressLine');
        let videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;
        let lineNow = document.getElementById('lineNow');
        progressLine!.addEventListener('mousedown', (e) => {
            let x = e.offsetX;
            let percent = x / progressLine.getBoundingClientRect().width;
            lineNow.style.width = (percent*100) + '%';
            videoPlayer.currentTime = percent * videoPlayer.duration;
        });
        videoPlayer.addEventListener('timeupdate', (e) => {
            let percent = videoPlayer.currentTime / videoPlayer.duration;
            lineNow.style.width = (percent * 100) + '%';
        });
    }
    render() {
        return (
            <div className='control_progress'>
                <div className='progress_clickable' id='progressLine'>
                    <div className='progress_line'>
                        <div id='lineNow' className='line_now'></div>
                    </div>
                </div>
            </div>
        )
    }
}