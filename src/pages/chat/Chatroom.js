import { Grid } from "@mui/material";
import { Box } from "@mui/system";

function Chatroom() {
	return (
		<>
			<Grid
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				direction={"column"}
				width={"100%"}
				height={"100%"}
				border={"1px solid gainsboro"}
			>
				<img src="img/chatbubbles.png" alt="chatbubble" width={96}></img>
				<Box paddingTop={5}>채팅할 상대를 선택해주세요</Box>
			</Grid>
		</>
	);
}
export default Chatroom;
