import Chatroom from "./Chatroom";
import { useTheme, Container, Grid } from "@mui/material";
import ChatList from "../../components/chat/chatList";

function Chat() {
	const theme = useTheme();
	return (
		<Container
			maxWidth={"100%"}
			style={{
				overflowX: "auto",
				padding: 0,
				margin: 0,
			}}
		>
			<Grid container spacing={0} minWidth={"1212px"}>
				<Grid></Grid>
				<Grid item xs={3.5}>
					<ChatList />
				</Grid>
				<Grid item xs={8.5}>
					<Chatroom />
				</Grid>
				<Grid></Grid>
			</Grid>
		</Container>
	);
}
export default Chat;
