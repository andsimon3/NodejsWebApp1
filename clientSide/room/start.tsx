declare var require: any
import * as React from 'react';
import { serverListener } from './../serverListener';

export class Set1 extends React.Component<{}, {}> {
    render() {
        function createRoom() {
            let text = {
                type: 'create',
            }
            serverListener.send(JSON.stringify(text));
        }
        function joinRoom() {
            let text = {
                type: 'join',
                roomId: (document.getElementById('test') as HTMLInputElement).value
            }
            serverListener.send(JSON.stringify(text));
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