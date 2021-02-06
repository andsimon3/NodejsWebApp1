import { makeAutoObservable } from 'mobx';

let ws = new WebSocket("wss://user49056293-amuj4q4k.wormhole.vk-apps.com");


//export
class serverListenerClass {
    socket
    state
    roomId
    constructor() {
        makeAutoObservable(this);
        this.state = 'not started';
        this.socket = ws;
        this.socket.onopen = (e) => {
            this.state = 'connected';
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
            this.state = 'disconnected';
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
                    this.state = 'joined';
                    this.roomId = message.roomId;
                    //this.setState({ window: <Chat roomId={message.roomId} /> })
                    break;
            }
        };
	}
    sendPlay() {
        let sendMes = {
            type: 'play',
            //data: videoPlayer.paused ? 'play' : 'pause',
        }
        this.socket.send(JSON.stringify(sendMes));
        console.log(123);
    }
}


export let serverListener = new serverListenerClass;