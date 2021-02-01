declare var require: any
import * as React from 'react';
import { socketContext } from '../context'

export class Set1 extends React.Component<{}, {}> {
    static contextType = socketContext;
    render() {
        let socket = this.context;
        function createRoom() {
            let text = {
                type: 'create',
            }
            socket.send(JSON.stringify(text));
        }
        function joinRoom() {
            let text = {
                type: 'join',
                roomId: (document.getElementById('test') as HTMLInputElement).value
            }
            socket.send(JSON.stringify(text));
        }

	return (
		<div>
			<input type='text' name='room_code' id='test' />
                <button onClick={(e) => joinRoom()}>Go</button>
                <button onClick={(e) => createRoom()}>Create</button>
		</div>
			)
	}
}