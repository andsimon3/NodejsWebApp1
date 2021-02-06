declare var require: any
import * as React from 'react';

export class Chat extends React.Component<{roomId}, { messages }> {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
		}
	}
    render() {
        function send() { }/*
            let answer = {
                type: 'message',
                data: (document.getElementById('test') as HTMLInputElement).value,
            }
            //socket.send(JSON.stringify(answer));
        }
        socket.onmessage = (event) => {
            let message = JSON.parse(event.data);
            switch (message.type) {
                case 'newMessage':
                    this.setState({ messages: [...this.state.messages, message.data] });
                    break;
            };
        }*/
        return (
            <div>
                <p>{this.props.roomId}</p><br/>
                <div>{/*this.state.messages.join('\n ')*/}</div>
                <input type='text' name='room_code' id='test' />
                <button onClick={(e) => send()}>Go</button>
            </div>
        )
    }
}