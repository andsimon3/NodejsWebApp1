declare var require: any
import * as React from 'react';
var ReactDOM = require('react-dom');
import bridge from '@vkontakte/vk-bridge';
import { Video } from './src/videoPlayer/videoPlayer';
import { Header } from './src/header/header';
import '@vkontakte/vkui/dist/vkui.css';
import './src/app.css';

export class Main extends React.Component {
    componentDidMount() {
        //bridge.subscribe((e) => console.log(e));
        //bridge.send("VKWebAppInit", {});
    }
    render() {
        let query = window.location;
        let qs = query.search.substr(1);
        let socket = new WebSocket("ws://localhost:1337?");
        console.log(qs);
        let auth = {
            type: 'auth',
            param: qs,
        }
        socket.onopen = (e) => {
            socket.send(JSON.stringify(auth));
            };
            socket.onmessage = function (event) {
                alert(`[message] Данные получены с сервера: ${event.data}`);
            socket.onclose = (e) => { console.log('ooops');}
        };
        function createRoom() {
            let text = {
                code: 24522,
                id: 1231243124,
                name: 'Andrei'
			}
            socket.send(JSON.stringify(text));
		}
        return (
            <div className='main vkui__root'>
                <Header />
                <Video />
                <input type='text' name='room_code' />
                <button>Go</button>
                <button onClick={createRoom}>Create</button>
            </div>
        );//ConnectSettings
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));