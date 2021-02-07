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
import { serverListener, serverListenerClass } from './clientSide/serverListener';
import { observer } from "mobx-react-lite"

export const Main = observer(({ sListener }: {sListener: serverListenerClass}) => {
    let window;
    /*React.useEffect(() => {
        //bridge.subscribe((e) => console.log(e));
        //bridge.send("VKWebAppInit", {});
    });*/
    switch (sListener.state) {
        case 'connected':
            window = <Set1 />;
            break;
        case 'joined':
            window = <Chat roomId={sListener.roomId} />;
            break;
        default:
            window = <div>Wait...</div> 
            break;
    }
    return (
        <div className='main vkui__root'>
            <Header />
            <Video />
            {window}
        </div>
    );//ConnectSettings

})


ReactDOM.render(<Main sListener={serverListener} />, document.getElementById('root'));