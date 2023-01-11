import Header from "../../components/common/layout/Header";
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          <Header />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <PostDetail />
          </Grid>
          <Grid item xs></Grid>
        </Grid>

        <Grid>
          {/* 지금은 채팅방으로 연결했는데, 나중에 글 올린 유저한테 연결하면 될 듯 */}
          <Link to={"/chat"} style={{ textDecoration: "none" }}>
            <button style={staticChatBtn} onClick={onChat}>채팅하기</button>
          </Link>
          <button style={staticLiftBtn} onClick={onLift}>끌올하기</button>
        </Grid>
      </Box>
    </>
  );
}
export default TradeBoard;
