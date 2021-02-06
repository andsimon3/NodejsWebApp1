/*const videoPlayer = document.getElementById('videosrc') as HTMLMediaElement;

export function serverListener(socket) {
    socket.onmessage = (event) => {
        let message = JSON.parse(event.data);
        switch (message.type) {
            case 'play':
                if (message.data == 'play') { videoPlayer.play() };
                if (message.data == 'pause') { videoPlayer.pause() };
                break;
            case 'alert':
                alert(message.data);
                break;
            case 'joining':
                alert(message.users + ' ' + message.roomId)
                this.setState({ window: <Chat roomId={message.roomId} /> })
                break;
        }
    };
}
*/

export class serverListener {
    socket = new WebSocket("wss://user49056293-amuj4q4k.wormhole.vk-apps.com");
    constructor() {
        this.socket.onopen = (e) => {
            let qs = window.location.search.substr(1);
            let auth = {
                type: 'auth',
                param: qs,
            }
            this.socket.send(JSON.stringify(auth));
        };
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
                    //this.setState({ window: <Chat roomId={message.roomId} /> })
                    break;
            }
        };
        this.socket.onclose = (e) => { console.log('ooops'); }
    }
    sendPlay() {
        let sendMes = {
            type: 'play',
            //data: videoPlayer.paused ? 'play' : 'pause',
        }
        this.socket.send(JSON.stringify(sendMes));
    }
}
