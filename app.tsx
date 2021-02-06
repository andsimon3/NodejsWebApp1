declare var require: any
import * as React from 'react';
var ReactDOM = require('react-dom');
import bridge from '@vkontakte/vk-bridge';
import { Video } from './clientSide/videoPlayer/videoPlayer';
import { Header } from './clientSide/header/header';
import { Set1 } from './clientSide/room/start';
import { Chat } from './clientSide/room/chat';
import '@vkontakte/vkui/dist/vkui.css';
import './clientSide/app.css';
import { socketContext } from './clientSide/context'

export class Main extends React.Component<{}, { window }> {
    //websocketReady = false;
    //socket = new WebSocket("wss://user49056293-amuj4q4k.wormhole.vk-apps.com");
    constructor(props) {
        super(props);
        this.state = {
            window: undefined
        };
        /*
        this.socket.onopen = (e) => {
            this.setState({ window: <Set1 /> });
            this.websocketReady = true;
            let qs = window.location.search.substr(1);
            let auth = {
                type: 'auth',
                param: qs,
            }
            this.socket.send(JSON.stringify(auth));
        };
        this.socket.onmessage = (e) => {
            console.log(e);
            let message = JSON.parse(e.data);
            console.log(message);
            switch(message.type){
                case 'alert':
                    alert(message.data);
                    break;
                case 'joining':
                    alert(message.users + ' ' + message.roomId)
                    this.setState({ window: <Chat roomId={message.roomId} /> })
                    break;
			}
        };
        this.socket.onclose = (e) => { console.log('ooops'); }
        */
    }
    componentDidMount() {
        //bridge.subscribe((e) => console.log(e));
        bridge.send("VKWebAppInit", {});
        //let socket = new WebSocket("ws://localhost:1337");
    }
    render() {
        return (
            <div className='main vkui__root'>
                    <Header />
                    {this.websocketReady ? 
                    <div>
                    <Video />
                    {this.state.window}</div>:
                    <div>Wait...</div>
                    }
            </div>
        );//ConnectSettings
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));