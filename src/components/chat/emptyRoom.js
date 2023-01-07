import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import * as React from "react";

function EmptyRoom() {
	return (
		<Grid
			container
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
	);
}

export default EmptyRoom;
