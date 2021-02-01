declare var require: any
import './down.css';
import * as React from 'react';
import { Timer } from './../_timer/timer'
import { FullScreen } from './../_fullscreen/fullscreen'
import { SettingsButton } from './../_settings/settings'
import { Progress } from './../_progress/progress'
import { Settings } from './../../Settings/Settings'

export class Down extends React.Component {
    render() {
        return (
            <div className='control_down' id='controlDown'>
                <div className='down_up'>
                    <Timer />
                    <div className='up_space' />
                    <SettingsButton />
                    <FullScreen />
                </div>
                <div className='down_down'>
                    <Progress />
                </div>
                <Settings />
            </div>
        )
    }
}