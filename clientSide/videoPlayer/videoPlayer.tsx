declare var require: any
import * as React from 'react';
import { Control } from './_control/control';
import './videoPlayer.css';

export class Video extends React.Component {
    componentDidMount() {

	}
    render() {
        return (
            <div className='Video'>
                <video id='videosrc' src='src/1min.mp4' className='Video_video'/>
                <Control />
            </div>
        );
    }
}
