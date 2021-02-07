import { action, computed, makeObservable, observable } from 'mobx';

let ws = new WebSocket("wss://user49056293-xao4ybo5.wormhole.vk-apps.com/");


export
    class serverListenerClass {
    socket = undefined;
    state = 'not started';
    roomId = undefined;
    constructor() {
        makeObservable(this, {
            state: observable,
            roomId: observable,
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
            console.log(e);
            let message = JSON.parse(e.data);
            console.log(message);
            switch (message.type) {
                case 'alert':
                    alert(message.data);
                    break;
                case 'joining':
                    alert(message.users + ' ' + message.roomId)
                    this.setState('joined');
                    this.roomId = message.roomId;
                    //this.setState({ window: <Chat roomId={message.roomId} /> })
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