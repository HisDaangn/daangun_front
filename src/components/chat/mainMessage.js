import { Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./message";
import { TextInput } from "./textInput";
import styles from "./mainMessage.module.css";

export default function MainMessage({ data }) {
	return (
		<div className={styles.container}>
			<Paper className={styles.paper} zDepth={2}>
				<Paper className={styles.messagesBody}>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={data.chatUser}
						avatarDisp={true}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={data.chatUser}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="まさりぶ"
						avatarDisp={true}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="まさりぶ"
						avatarDisp={false}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={data.chatUser}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="まさりぶ"
						avatarDisp={true}
					/>
					<MessageLeft
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL="/img/profile_default.png"
						displayName={data.chatUser}
						avatarDisp={false}
					/>
					<MessageRight
						message="테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다테스트 메시지입니다"
						timestamp="MM/DD 00:00"
						photoURL=""
						displayName="まさりぶ"
						avatarDisp={true}
					/>
				</Paper>
				<TextInput />
			</Paper>
		</div>
	);
}
