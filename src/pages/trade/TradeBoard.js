import Header from "../../components/common/layout/Header";
import PostDetail from "../../components/trade/PostDetail";
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
    right: "110px",
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
    right: "200px",
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
          <button style={staticChatBtn} onClick={onChat}>채팅하기</button>
          <button style={staticLiftBtn} onClick={onLift}>끌올하기</button>
        </Grid>
      </Box>
    </>
  );
}
export default TradeBoard;
