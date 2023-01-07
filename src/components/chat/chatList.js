import {
	Avatar,
	Button,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import tempData from "../../components/chat/tempData";
import EmptyRoom from "./emptyRoom";

function ChatList() {
	const chatLists = tempData;
	return (
		<Grid
			container
			spacing={0}
			direction="row"
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
				<Box>
					<Avatar
						alt="default"
						src="/img/profile_default.png"
						sx={{ width: 52, height: 52, border: "2px solid orange" }}
					/>
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
							}}
						>
							<ListItemText primary="사용자" sx={{ fontWeight: "bold" }} />
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
							maxHeight: "70vh",
						}}
					>
						{/* 실제 다른 유저와의 채팅룸 */}
						{chatLists.map((chat) => (
							<ListItemButton
								key={chat.id}
								sx={{ borderBottom: "1px solid", borderColor: "gainsboro" }}
							>
								<ListItemAvatar>
									<Avatar
										alt="default"
										src="img/profile_default.png"
										sx={{ width: 40, height: 40 }}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={chat.chatUser}
									secondary={chat.message}
								/>
								<img src={chat.itemImg} width={40} alt="default" />
							</ListItemButton>
						))}
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
