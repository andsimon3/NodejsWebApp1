import { serverListener } from './serverListener';
import { action, computed, makeObservable, observable } from 'mobx';

export class roomClass {
	videoPlayer = undefined;
	roomId: number = undefined;
	members = [];
	chat = [];
	settings = {};
	constructor() {
		makeObservable(this, {
			roomId: observable,
			members: observable,
			chat: observable,
			settings: observable,
			setRoomId: action,
			newMessage: action,
			newMember: action,
			sendChat: action,
			getChat: action
		})
	}
	setRoomId(newId: number) {
		this.roomId = newId;
	}
	newMessage(newMess) {
		this.chat.push(newMess);
	}
	newMember(newMemb, allMemb) {
		this.chat.push(newMemb + ' joined');
		this.members = allMemb;
	}
	sendChat(message) {
		//this.chat.push(message);
		let answer = JSON.stringify({
			type: 'message',
			data: message,
		})
		serverListener.send(answer);
	}
	getChat(message) {
		this.chat.push(message);
	}
	sendPlay() {

	}
}


export let room = new roomClass;
/*
Описание объектов:

room:{
		users: [str(num(access) . num(id))],
		chat: [{
			id: num,
			time: num,
			timer: num,
			user: 'str',
			text: 'str',
			reply: num,
				//maybe
			type: 'str',
			timer_point: num,
		}],
		timer_time: num,
		timer_lastUpdate: num,
		control: num, (0-4: host/admins/50%/100%/any)
		sync: num, (0 - none/ every 'num' second)
		sync_accuracy: num, (0 - none/'num' second)
		tittle: 'str',
		icon: 'url',
		password: 'str' ('null/code/pass' + ':' + 'value'),
		src: 'url',
	}
 
*/