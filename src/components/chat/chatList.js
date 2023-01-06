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

function ChatList() {
	const chatLists = [
		{
			id: 0,
			chatUser: "김철수",
			message: "감사합니다 잘 파세요~",
			itemImg: "img/item_default.png",
		},
		{
			id: 1,
			chatUser: "김수영",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test1.png",
		},
		{
			id: 2,
			chatUser: "이수혁",
			message: "감사합니다 새해 복 많이 받으세요!!",
			itemImg: "img/item_test2.png",
		},
		{
			id: 3,
			chatUser: "곽철수",
			message: "가는 길 조심히 들어가세요~!!",
			itemImg: "img/item_test3.png",
		},
		{
			id: 4,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 5,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 6,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 7,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 8,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 9,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 10,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
		{
			id: 11,
			chatUser: "박세훈",
			message: "좋은 하루 되세요!!",
			itemImg: "img/item_test4.png",
		},
	];

	return (
		<Grid
			container
			spacing={0}
			direction="row"
			style={{
				minWidth: "380px",
			}}
		>
			<Grid
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
			<Grid
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
