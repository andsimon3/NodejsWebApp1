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

export class Main extends React.Component<{}, { socket, window }> {
    constructor(props) {
        super(props);
        this.state = {
            socket: {} as WebSocket,
            window: <Set1 />,
        };
    }
    componentDidMount() {
        //bridge.subscribe((e) => console.log(e));
        bridge.send("VKWebAppInit", {});
        //let socket = new WebSocket("ws://localhost:1337");
        let socket = new WebSocket("wss://user49056293-znl6c6sy.wormhole.vk-apps.com/");
        
        this.setState({ socket: socket });
        socket.onopen = (e) => {
            let qs = window.location.search.substr(1);
            let auth = {
                type: 'auth',
                param: qs,
            }
            socket.send(JSON.stringify(auth));
            };
        socket.onmessage = (event) => {
            let message = JSON.parse(event.data);
            switch(message.type){
                case 'alert':
                    alert(message.data);
                    break;
                case 'joining':
                    alert(message.users + ' ' + message.roomId)
                    this.setState({ window: <Chat /> })
                    break;
			}
        };
        socket.onclose = (e) => { console.log('ooops'); }
    }
    render() {
        return (
            <div className='main vkui__root'>
                <socketContext.Provider value={this.state.socket }>
                    <Header />
                    <Video />
                    {this.state.window}
                </socketContext.Provider>
            </div>
        );//ConnectSettings
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));