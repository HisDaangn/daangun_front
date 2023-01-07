import EmptyRoom from "../../components/chat/emptyRoom";
import ExistRoom from "../../components/chat/existRoom";

function Chatroom({ roomId }) {
	if (typeof roomId === "undefined") {
		return <EmptyRoom />;
	} else {
		return <ExistRoom id={roomId} />;
	}
}
export default Chatroom;
