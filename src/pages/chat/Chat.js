import Chatroom from "./Chatroom";
import { useTheme, Container, Grid } from "@mui/material";
import ChatList from "../../components/chat/chatList";

function Chat() {
	const theme = useTheme();
	return (
		<Container
			style={{
				position: "relative",
				marginLeft: "auto",
				marginRight: "auto",
				overflowX: "auto",
				padding: 0,
			}}
		>
			<Grid container spacing={0} direction="row">
				<Grid item xs={4}>
					<ChatList />
				</Grid>
				<Grid item xs={8}>
					<Chatroom />
				</Grid>
			</Grid>
		</Container>
	);
}
export default Chat;
