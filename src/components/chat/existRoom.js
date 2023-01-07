import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItem } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import ChatMenu from "./chatMenu";
import MainMessage from "./mainMessage";
import Message from "./mainMessage";
import tempData from "./tempData";

function ExistRoom({ id }) {
	const data = tempData;
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
					<ListItemText
						primary={data[id].chatUser}
						sx={{ fontWeight: "bold" }}
					/>
					<ChatMenu />
				</ListItem>
				<ListItemButton
					sx={{
						borderBottom: "1px solid",
						borderColor: "gainsboro",
					}}
				>
					<img src={data[id].itemImg} width={40} alt="" />
					<ListItemText
						sx={{
							paddingLeft: 2,
						}}
						primary="상품명"
						secondary="100,000원"
						style={{
							color: "black",
						}}
					/>
					<div style={{ fontWeight: "bold", paddingRight: 2 }}>거래 현황</div>
				</ListItemButton>
			</List>
			<MainMessage data={data[id]} />
		</Grid>
	);
}

export default ExistRoom;
