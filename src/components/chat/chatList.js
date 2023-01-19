import {
	Avatar,
	Button,
	Grid,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import tempData from "../../components/chat/tempData";
import { Link } from "react-router-dom";
import Room from "./room";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChatList({ roomId, userId }) {
	// tempData 가져오기
	const chatLists = tempData;
	const [chatList, setChatList] = useState([]);
	const userDB = JSON.parse(localStorage.getItem("sessionInfo"));
<<<<<<< HEAD
	const navigate = useNavigate();
=======
>>>>>>> dev

	useEffect(function async() {
		getAllChatRoom();
	}, []);

	// GET
	async function getAllChatRoom() {
		try {
			userId = userDB.id;
			const response = await axios.get(
				`http://localhost:8080/chat/user/${userId}`
			);
			// console.log(response);
			setChatList(response.data);
			// console.log(response);
		} catch (e) {
			console.log(e);
		}
	}

	// function roomClick(roomId) {
	// 	navigate(`/chat/room/${roomId}`);
	// }

	return (
		<Grid
			container
			style={{
				clear: "both",
			}}
		>
			{/* 1st */}
			<Grid
				item
				style={{ display: "flex", justifyContent: "center" }}
				xs={2}
				sx={{
					paddingTop: 3,
					border: "1px solid gainsboro",
				}}
			>
				{/* 내 아바타 이미지 */}
				<Box>
					<Link to={"/chat"}>
						<Avatar
							alt="default"
							src="/img/profile_default.png"
							sx={{ width: 52, height: 52, border: "2px solid orange" }}
						/>
					</Link>
				</Box>
			</Grid>
			{/* 2nd */}
			<Grid
				item
				xs={10}
				sx={{
					borderTop: "1px solid gainsboro",
					borderRight: "1px solid gainsboro",
					borderBottom: "1px solid gainsboro",
				}}
			>
				<Box
					sx={{
						maxheight: "10",
					}}
				>
					<List disablePadding>
						{/* 개요 */}
						<ListItem
							sx={{
								borderBottom: "1px solid gainsboro",
								padding: 2,
							}}
						>
							<ListItemText primary={userDB.name} sx={{ fontWeight: "bold" }} />
						</ListItem>
						<ListItem
							sx={{
								paddingTop: 0,
								paddingBottom: 0,
								paddingLeft: 0,
								paddingRight: 2,
								borderBottom: "1px solid gainsboro",
							}}
							style={{ display: "flex", justifyContent: "flex-end" }}
						>
							<Button
								variant="text"
								endIcon={<CheckCircleOutlineIcon />}
								style={{
									color: "grey",
								}}
							>
								안 읽은 메시지만 보기
							</Button>
						</ListItem>
					</List>
					<List
						style={{
							overflow: "scroll",
						}}
					>
						<Box minHeight={"calc(78vh - 64px)"}>
							{/* 실제 다른 유저와의 채팅룸 */}
							{chatList.map((room) => (
								<Room
									key={room.roomId}
									room={room}
									// onClick={roomClick(room.roomId)}
								/>
							))}
						</Box>
					</List>
					<List disablePadding>
						<ListItem
							sx={{
								paddingTop: 0,
								paddingBottom: 0,
								paddingLeft: 1,
								paddingRight: 0,
								borderBottom: "1px solid gainsboro",
							}}
							style={{
								display: "flex",
								justifyContent: "flex-start",
							}}
						>
							<Button
								variant="text"
								endIcon={<HelpOutlineIcon />}
								style={{
									color: "grey",
								}}
							>
								자주묻는 질문
							</Button>
						</ListItem>
					</List>
				</Box>
			</Grid>
		</Grid>
	);
}

export default ChatList;
