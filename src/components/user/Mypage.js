import { Avatar, Box, Button, Icon, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./Mypage.css";
import HistoryIcon from "@mui/icons-material/History";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Btn from "../common/layout/Btn";
import GaugeBar from "../common/layout/GaugeBar";
import purchaseHistory from "../../assets/purchaseHistory.png";
import salesHistory from "../../assets/salesHistory.png";
import watchlist from "../../assets/watchlist.png";

export default function Mypage() {
  return (
    <Box className="section">
      <Stack direction="column" spacing={3}>
        <div className="first">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div id="profPhoto">
              <Avatar sx={{ width: "90px", height: "90px" }}></Avatar>

              <Stack direction="column" spacing={0.3} id="userInfo">
                <span id="nickname">날아다니는스푼</span>
                <div id="minorInfo">
                  <span id="address">흥해읍</span>
                  <span id="userId">#7827229</span>
                </div>
              </Stack>
            </div>
            <Btn>프로필 수정</Btn>
          </Toolbar>
        </div>
        <div className="second">
          <Stack direction="column" id="tempDiv">
            <Typography variant="h5" id="temperature">
              38.1°C
            </Typography>
            <GaugeBar />
          </Stack>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              top: "10px",
            }}
            variant="dense"
          >
            <span id="loginHistory">
              최근 3일 이내 활동(2019년 12월 12일 가입)
            </span>
            <Btn>로그아웃</Btn>
          </Toolbar>
        </div>
        <div className="third">
          <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={salesHistory}
                style={{ width: "70px", height: "70px" }}
              />
              <span>판매 내역</span>
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={purchaseHistory}
                style={{ width: "70px", height: "70px" }}
              />
              <span>구매 내역</span>
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={watchlist} style={{ width: "70px", height: "70px" }} />
              <span>관심 목록</span>
            </Stack>
          </Toolbar>
        </div>
        <div className="fourth">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="column" spacing={2}>
              <div>
                <span>받은 매너 평가</span>
                <ArrowForwardIosIcon />
              </div>

              <Stack direction="row" spacing={1}>
                <PeopleAltIcon />
                <span> #</span>
                <div>후기내용</div>
              </Stack>
            </Stack>

            <div>받은 거래 후기</div>
          </Toolbar>
        </div>
      </Stack>
    </Box>
  );
}
