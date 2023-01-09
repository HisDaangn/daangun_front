import { Avatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
				<img src={room.itemImg} width={40} alt="" />
			</ListItemButton>
		</Link>
	);
}

export default Room;
