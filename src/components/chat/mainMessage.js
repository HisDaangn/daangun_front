import { Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./message";
import { TextInput } from "./textInput";
import styles from "./mainMessage.module.css";
import SockJS from "sockjs-client";
// import * as StompJS from "@stomp/stompjs";
import StompJS from "stompjs";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ReportProblem } from "@mui/icons-material";

export default function MainMessage({ profileImg, pubName, roomId }) {
	const userDB = JSON.parse(localStorage.getItem("sessionInfo"));
	const [messages, setMessages] = useState([]);
	const [content, setContent] = useState("");
	const [check, setCheck] = useState(false);
	const client = useRef();
	const chatPage = useRef();
	useEffect(
		function async() {
			getAllMessages();
		},
		[roomId]
	);
	useEffect(
		function async() {
			getAllMessages();
			chatPage.current?.scrollIntoView({
				behavior: "smooth",
			});
		},
		[check]
	);

	useEffect(() => {
		const sock = new SockJS("http://localhost:8080/stomp/chat");
		client.current = StompJS.over(sock);
		waitForConnection(client, stompConnect);
		return () => stompDisconnect();
	}, [roomId]);

	// GET
	async function getAllMessages() {
		try {
			const response = await axios.get(
				`http://localhost:8080/chat/message/${roomId}`
			);
			setMessages(response.data);
		} catch (e) {
			console.log(e);
		}
	}

	// const connect = () => {
	// 	client.current = new StompJS.Client({
	// 		brokerURL: "ws://localhost:8080/stomp/chat",
	// 		debug: function (str) {
	// 			console.log(str);
	// 		},
	// 		// reconnectDelay: 5000,
	// 		// heartbeatIncoming: 4000,
	// 		// heartbeatOutgoing: 4000,
	// 		onConnect: (frame) => {
	// 			console.log(frame);
	// 			subscribe();
	// 		},
	// 		onStompError: (frame) => {
	// 			console.log(frame);
	// 		},
	// 	});

	// 	client.current.activate();
	// };

	// const disconnect = () => {
	// 	client.current.deactivate();
	// };

	// const subscribe = () => {
	// 	if (client != null) {
	// 		client.current.subscribe(`/sub/chat/room/${roomId}`, (chat) => {
	// 			console.log(chat);
	// 			const newMessage = JSON.parse(chat.body).message;
	// 			addContent(newMessage);
	// 		});
	// 	}
	// };

	// const addContent = (message) => {
	// 	setContent(content.concat(message));
	// };

	// const onClickSend = (message) => {
	// 	console.log(client.connected);
	// 	if (!client.connected) return;

	// 	client.publish({
	// 		destination: `/pub/chat/room/${roomId}`,
	// 		body: JSON.stringify({
	// 			message: message,
	// 		}),
	// 	});
	// };

	const stompConnect = () => {
		try {
			client.current.connect({}, () => {
				client.current.subscribe("/sub/chat/room/" + roomId, (chat) => {
					const newMessage = JSON.parse(chat.body);
					// setCheck(!check);
					// client.current.receiveMessage(newMessage);
					console.log("fsdfdsf");
				});
			});
		} catch (error) {
			console.log(error);
		}
	};
	const stompDisconnect = () => {
		try {
			client.current.disconnect(() => {
				client.current.unsubscribe("sub-0");
			});
		} catch (error) {
			console.log(error);
		}
	};

	function waitForConnection(client, callback) {
		setTimeout(
			function () {
				// 연결되었을 때 콜백함수 실행
				if (client.current.ws.readyState === 0) {
					callback();
					// 연결이 안 되었으면 재호출
				} else {
					waitForConnection(client, callback);
				}
			},
			1 // 밀리초 간격으로 실행
		);
	}

	const onClickSend = (message) => {
		console.log(message);
		client.current.send(
			"/pub/chat/room/" + roomId,
			{},
			JSON.stringify({
				message: message,
				writerId: userDB.id,
				roomId: roomId,
			})
		);
		setCheck(!check);
		// client.current.publish({
		// 	destination: `/pub/chat/room/${roomId}`,
		// 	body: JSON.stringify({
		// 		message: message,
		// 	}),
		// });
	};

	return (
		<div className={styles.container}>
			<Paper className={styles.paper} zdepth={2}>
				<Paper className={styles.messagesBody}>
					{/* 여기를 백엔드와 연결해서 구현해야 함 */}
					{/* 
						if message가 상대방한테서 온 거면 
						그 메시지 정보를 <MessageLeft> 컴포넌트에 props로 넘겨준다
						if message가 내가 상대에게 보낸 거면
						그 메시지 정보를 <MessageRight> 컴포넌트에 props로 넘겨준다
					*/}
					{messages.map((message) =>
						message.writerId === userDB.id ? (
							<MessageRight
								key={message.id}
								message={message.message}
								timestamp={message.send_at}
								photoURL="/img/profile_default.png"
								displayName="사용자"
								avatarDisp={false}
							/>
						) : (
							<MessageLeft
								key={message.id}
								message={message.message}
								timestamp={message.send_at}
								photoURL="/img/profile_default.png"
								displayName={pubName}
								avatarDisp={true}
							/>
						)
					)}
					<div ref={chatPage} />
					{/* <MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={pubName}
						avatarDisp={true}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={pubName}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="사용자"
						avatarDisp={true}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="사용자"
						avatarDisp={false}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={pubName}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="사용자"
						avatarDisp={true}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={pubName}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="사용자"
						avatarDisp={true}
					/> */}
				</Paper>
				<TextInput onClick={onClickSend} />
			</Paper>
		</div>
	);
}
