declare var require: any
import * as React from 'react';
import './Settings.css';
import { IconButton } from '@vkontakte/vkui';
import { Icon24Cancel, Icon24Play, Icon24Home, Icon24Search } from '@vkontakte/icons';
import { VideoSettings } from './_video/video';

export class Settings extends React.Component {
    render() {
        return (
            <div className='main_Settings'>
                <div className='Settings_header'>
                    <h1>Settings / Video</h1>
                    <div className='header_space' />
                    <IconButton icon={<Icon24Cancel/> } />
                </div>
                    <div className='Settings_menu'>
                        <IconButton icon={<Icon24Play />} />
                        <IconButton icon={<Icon24Home />} />
                        <IconButton icon={<Icon24Search />} />
                </div>
                <div className='Settings_main'>
                    <VideoSettings />
                </div>
            </div>
        );
    }
}
