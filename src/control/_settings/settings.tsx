declare var require: any
import './settings.css';
import * as React from 'react';
import { IconButton } from '@vkontakte/vkui';
import { Icon24Settings } from '@vkontakte/icons';


export class SettingsButton extends React.Component{

    render() {
        function settingsOpen() {
            if (!document.fullscreenElement) {
                document.getElementById('root').requestFullscreen();
                } else if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
        }
        return (
            <IconButton className='control_settings' icon={<Icon24Settings />} onClick = { settingsOpen } />
        )
    }
}