import { action, computed, makeObservable, observable } from 'mobx';
import { room } from './room';

let ws = new WebSocket("wss://user49056293-xao4ybo5.wormhole.vk-apps.com/");


export
    class serverListenerClass {
    socket = undefined;
    state = 'not started';
    constructor() {
        makeObservable(this, {
            state: observable,
            setState: action/*,
            listen: computed,
            connect: computed,
            send: computed*/
        });
        this.socket = ws;
        this.connect();
    }
    setState(newState: string) {
        this.state = newState;
	}
    connect() {
        this.socket.onopen = (e) => {
            this.setState('connected');
            this.listen();
            let qs = window.location.search.substr(1);
            let auth = {
                type: 'auth',
                param: qs,
            }
            this.socket.send(JSON.stringify(auth));
        };
        this.socket.onclose = (e) => {
            console.log('ooops');
            this.setState('disconnected');
        }
	}
    listen() {
        this.socket.onmessage = (e) => {
            let message = JSON.parse(e.data);
            console.log(message);
            switch (message.type) {
                case 'auth':
                    console.log(message.data);
                    break;
                case 'joining':
                    console.log(message.users + ' in room #' + message.roomId)
                    this.setState('joined');
                    room.setRoomId(message.roomId);
                    break;
                case 'newMember':
                    room.newMember(message.newOne, message.members);
                    break;
                case 'error':
                    alert('ERROR: ' + message.code + ' ' + message.text);
                    break;
                case 'newMessage':
                    room.getChat(message.data);
                    break;
            }
        };
    }
    send(mes: string) {
        this.socket.send(mes);
        console.log(mes);
    }
}


export let serverListener = new serverListenerClass;