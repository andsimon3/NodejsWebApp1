declare var require: any
import * as React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className='main_header'>
                WatchTogether
            </div>
        );
    }
}

