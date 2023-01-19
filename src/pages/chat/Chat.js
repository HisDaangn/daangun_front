import Chatroom from "./Chatroom";
import { useTheme, Container, Grid } from "@mui/material";
import ChatList from "../../components/chat/chatList";
import { useParams } from "react-router-dom";
import ScrollTop from "../../components/user/ScrollTop";

function Chat({ userId }) {
  const theme = useTheme();
  const { id } = useParams();

  return (
    <div>
      <ScrollTop />
      <Container
        maxWidth={"100%"}
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Grid container minWidth={"1212px"} minHeight={"calc(90vh - 64px)"}>
          <Grid item xs={3.5}>
            <ChatList roomId={id} userId={userId} />
          </Grid>
          <Grid item xs={8.5}>
            <Chatroom roomId={id} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Chat;
