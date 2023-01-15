import PostDetail from "../../components/trade/PostDetail";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
const TradeBoard = () => {
  const onChat = chatBtn => {
    console.log("chatBtn click !");
  }
  const onLift = liftBtn => {
    console.log("liftBtn click !");
  }
  const staticChatBtn = {
    color: "white",
    backgroundColor: "#ed7833",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "10px",
    width: "80px",
    height: "30px",
    border: "none",
    marginLeft: "10px",
    position: "fixed",
    bottom: "20%",
    right: "510px",
  }
  const staticLiftBtn = {
    color: "white",
    backgroundColor: "#ed7833",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "10px",
    width: "80px",
    height: "30px",
    border: "none",
    marginLeft: "10px",
    position: "fixed",
    bottom: "20%",
    right: "600px",
  }
  return (
    <>
      <PostDetail />
      <Grid>
        <Link to={"/chat"} style={{ textDecoration: "none" }}>
          <button style={staticChatBtn} onClick={onChat}>채팅하기</button>
        </Link>
        <button style={staticLiftBtn} onClick={onLift}>끌올하기</button>
      </Grid>

    </>
  );
}
export default TradeBoard;
