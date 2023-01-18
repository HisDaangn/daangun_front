import { Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./message";
import { TextInput } from "./textInput";
import styles from "./mainMessage.module.css";

export default function MainMessage({ data }) {
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
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={"홍길동"}
						avatarDisp={true}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={"홍길동"}
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
						displayName={"홍길동"}
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
						displayName={"홍길동"}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="사용자"
						avatarDisp={true}
					/>
				</Paper>
				<TextInput />
			</Paper>
		</div>
	);
}
