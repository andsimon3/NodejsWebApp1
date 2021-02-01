declare var require: any
import './fullscreen.css';
import * as React from 'react';
import { IconButton } from '@vkontakte/vkui';
import { Icon24Fullscreen, Icon24FullscreenExit } from '@vkontakte/icons';
export class FullScreen extends React.Component<{}, { icon: any }> {
    constructor(props) {
        super(props);
        this.state = {
            icon: <Icon24Fullscreen />
        }
    }
    componentDidMount() {
        document.addEventListener('fullscreenchange', (event) => {
            this.setState({ icon: document.fullscreenElement ? <Icon24FullscreenExit /> : <Icon24Fullscreen />})
        })
    }
    render() {
        function fullscreenChange() {
            if (!document.fullscreenElement) {
                document.getElementById('root').requestFullscreen();
                } else if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
        }
        return (
            <IconButton className='control_fullscreen' icon={this.state.icon} onClick={fullscreenChange}/>
        )
    }
}