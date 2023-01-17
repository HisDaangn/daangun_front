import EmptyRoom from "../../components/chat/emptyRoom";
import ExistRoom from "../../components/chat/existRoom";

function Chatroom({ roomId, chatRoom }) {
	if (typeof roomId === "undefined") {
		return <EmptyRoom />;
	} else {
		return <ExistRoom roomId={roomId} />;
	}
}
export default Chatroom;
