import { Avatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Box } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

function Room({ room }) {
	return (
		<Link to={`/chat/room/${room.id}`} style={{ textDecoration: "none" }}>
			<ListItemButton
				key={room.id}
				sx={{ borderBottom: "1px solid", borderColor: "gainsboro" }}
			>
				<ListItemAvatar>
					<Avatar
						alt="default"
						src={room.profileImg}
						sx={{ width: 40, height: 40 }}
					/>
				</ListItemAvatar>
				<ListItemText
					primary={room.chatUser}
					secondary={room.lastMessage}
					style={{
						color: "black",
					}}
				/>
				<Box
					component={"img"}
					src={room.itemImg}
					width={"40px"}
					// height={"684px"}
				/>
			</ListItemButton>
		</Link>
	);
}

export default Room;
