import { Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./message";
import { TextInput } from "./textInput";
import styles from "./mainMessage.module.css";
import SockJS from "sockjs-client";
import StompJS from "stompjs";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import shortid from "shortid";

export default function MainMessage({ pubName, subName, writerId, roomId }) {
	const userDB = JSON.parse(localStorage.getItem("sessionInfo"));
	const [messages, setMessages] = useState([]);
	const [check, setCheck] = useState(false);
	const client = useRef();
	const messagesEndRef = useRef(null);
	let displayName;

	useEffect(
		function () {
			getAllMessages();
		},
		[messages]
	);

	useEffect(() => {
		setTimeout(
			() => messagesEndRef.current?.scrollIntoView({ behavior: "auto" }),
			150
		);
	}, [roomId]);

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

	const stompConnect = () => {
		try {
			client.current.connect({}, () => {
				client.current.subscribe("/sub/chat/room/" + roomId, (chat) => {
					const newMessage = JSON.parse(chat.body);
					setMessages([...messages, newMessage]);
					messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
					// window.location.reload();
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
		client.current.send(
			"/pub/chat/room/" + roomId,
			{},
			JSON.stringify({
				message: message,
				writerId: userDB.id,
				roomId: roomId,
				randomKey: shortid.generate(),
			})
		);
	};

	if (userDB.id !== writerId) {
		displayName = pubName;
	} else {
		displayName = subName;
	}

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
								key={message.randomKey}
								message={message.message}
								timestamp={message.send_at}
								photoURL="/img/profile_default.png"
								displayName="사용자"
								avatarDisp={false}
							/>
						) : (
							<MessageLeft
								key={message.randomKey}
								message={message.message}
								timestamp={message.send_at}
								photoURL="/img/profile_default.png"
								displayName={displayName}
								avatarDisp={true}
							/>
						)
					)}
					<div ref={messagesEndRef}></div>
				</Paper>
				<TextInput onClick={onClickSend} />
			</Paper>
		</div>
	);
}
