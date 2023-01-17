import { Avatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Box } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

function Room({ room }) {
	return (
		<Link to={`/chat/room/${room.roomId}`} style={{ textDecoration: "none" }}>
			<ListItemButton
				key={room.roomId}
				sx={{ borderBottom: "1px solid", borderColor: "gainsboro" }}
			>
				<ListItemAvatar>
					<Avatar
						alt="default"
						src="/img/profile_default.png" //임시로 이렇게 지정.
						sx={{ width: 40, height: 40 }}
					/>
				</ListItemAvatar>
				<ListItemText
					primary={room.pubName}
					secondary={room.post.content}
					style={{
						color: "black",
					}}
				/>
				<Box
					component={"img"}
					src={room.photoURL}
					width={"40px"}
					// height={"684px"}
				/>
			</ListItemButton>
		</Link>
	);
}

export default Room;
