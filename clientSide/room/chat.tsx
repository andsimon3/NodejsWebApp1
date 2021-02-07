declare var require: any
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { room } from './../room';

export const Chat = observer(() => {

    function send() {
        room.sendChat((document.getElementById('test') as HTMLInputElement).value)
    }
    return (
        <div>
            <p>{room.roomId} <br /> {room.members.join(', ')} <br /> {room.chat.map((text) => { return <p key={text}>{text}</p> })}</p><br />
            <div>{/*this.state.messages.join('\n ')*/}</div>
            <input type='text' name='room_code' id='test' />
            <button onClick={(e) => send()}>Go</button>
        </div>
    )
});
