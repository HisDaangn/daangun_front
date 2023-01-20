import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import ChatMenu from "./chatMenu";
import MainMessage from "./mainMessage";

function ExistRoom({ roomId }) {
	const [pubName, setPubName] = useState("");
	const [subName, setSubName] = useState("");
	const [writerId, setWriterId] = useState(0);
	const [photoURL, setPhotoURL] = useState("");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);

	// GET
	async function getChatRoom() {
		try {
			const response = await axios.get(
				`http://localhost:8080/chat/room/${roomId}`
			);
			// console.log(response);
			setPubName(response.data.pubName);
			setSubName(response.data.subName);
			setWriterId(response.data.post.writerId);
			setPhotoURL(response.data.post.photoURL);
			setTitle(response.data.post.title);
			setPrice(response.data.post.price);
		} catch (e) {
			console.log(e);
		}
	}

	getChatRoom();

	return (
		<Grid
			container
			direction={"column"}
			minWidth={"800px"}
			width={"100%"}
			height={"100%"}
			border={"1px solid gainsboro"}
		>
			<List disablePadding>
				{/* 개요 */}
				<ListItem
					sx={{
						borderBottom: "1px solid gainsboro",
						padding: 2,
					}}
				>
					<ListItemAvatar>
						<Avatar
							alt=""
							src="/img/profile_default.png"
							sx={{ width: 40, height: 40 }}
						></Avatar>
					</ListItemAvatar>
					<ListItemText primary={pubName} sx={{ fontWeight: "bold" }} />
					<ChatMenu />
				</ListItem>
				<ListItemButton
					sx={{
						borderBottom: "1px solid",
						borderColor: "gainsboro",
					}}
				>
					<Box
						component={"img"}
						src={photoURL}
						width={"40px"}
						height={"40px"}
						// height={"684px"}
					/>

					<ListItemText
						sx={{
							paddingLeft: 2,
						}}
						primary={title}
						secondary={price}
						style={{
							color: "black",
						}}
					/>
					<div style={{ fontWeight: "bold", paddingRight: 2 }}>거래 현황</div>
				</ListItemButton>
			</List>
			<Box>
				<MainMessage
					pubName={pubName}
					subName={subName}
					writerId={writerId}
					roomId={roomId}
				/>
			</Box>
		</Grid>
	);
}

export default ExistRoom;
