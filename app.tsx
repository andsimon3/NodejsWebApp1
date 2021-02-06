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
import { serverListener } from './clientSide/serverListener';
import { observer } from "mobx-react"

export const Main = observer(() => {
    const [window, setWindow] = React.useState(<div>Wait...</div>);
    React.useEffect(() => {
        console.log(serverListener);
        //bridge.subscribe((e) => console.log(e));
        bridge.send("VKWebAppInit", {});
        //let socket = new WebSocket("ws://localhost:1337");

        console.log(serverListener.state);
        switch (serverListener.state) {
            case 'connected':
                setWindow(<Set1 />);
                break;
            case 'joined':
                setWindow(<Chat roomId={serverListener.roomId} />);
                break;
        }
    })
    return (
        <div className='main vkui__root'>
            <Header />
            <Video />
            {window}
        </div>
    );//ConnectSettings

})


ReactDOM.render(<Main />, document.getElementById('root'));