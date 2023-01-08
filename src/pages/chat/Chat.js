import Chatroom from "./Chatroom";
import { useTheme, Container, Grid } from "@mui/material";
import ChatList from "../../components/chat/chatList";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function Chat() {
	const theme = useTheme();
	const { id } = useParams();
	return (
		<Container
			maxWidth={"100%"}
			style={{
				overflowX: "auto",
				padding: 0,
				margin: 0,
			}}
		>
			<Grid container minWidth={"1212px"}>
				<Grid item xs={3.5}>
					<ChatList />
				</Grid>
				<Grid item xs={8.5}>
					<Chatroom roomId={id} />
				</Grid>
			</Grid>
		</Container>
	);
}
export default Chat;
