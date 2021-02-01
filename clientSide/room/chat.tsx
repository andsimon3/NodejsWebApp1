declare var require: any
import * as React from 'react';
import { socketContext } from '../context'

export class Chat extends React.Component<{}, { messages }> {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
		}
	}
    static contextType = socketContext;
    render() {
        let socket = this.context;
        function send() {
            let answer = {
                type: 'message',
                data: (document.getElementById('test') as HTMLInputElement).value,
            }
            socket.send(JSON.stringify(answer));
        }
        socket.onmessage = (event) => {
            let message = JSON.parse(event.data);
            switch (message.type) {
                case 'newMessage':
                    this.setState({ messages: [...this.state.messages, message.data] });
                    break;
            };
        }
        return (
            <div>
                <div>{this.state.messages.join('\n ')}</div>
                <input type='text' name='room_code' id='test' />
                <button onClick={(e) => send()}>Go</button>
            </div>
        )
    }
}