import {
  Avatar,
  Box,
  Button,
  Icon,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Mypage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Btn from "../common/layout/Btn";
import GaugeBar from "../common/layout/GaugeBar";
import purchaseHistory from "../../assets/purchaseHistory.png";
import salesHistory from "../../assets/salesHistory.png";
import watchlist from "../../assets/watchlist.png";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Mypage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "600px",
    height: "55%",
    bgcolor: "white",
    boxShadow: 24,
  };

  const [user, setUser] = useState({});
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  //Mypage 한 번만 실행
  useEffect(() => {
    async function fetchData() {
      const userDB = await getUser("106719395254757834672");
      setUser(userDB);
      setYear(userDB.created_at.substr(0, 4));
      setMonth(userDB.created_at.substr(5, 2));
      setDay(userDB.created_at.substr(8, 2));
    }
    fetchData();
  }, []);

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
                <span id="nickname">{user.name}</span>
                <div id="minorInfo">
                  <span id="address">{user.address}</span>
                  <span id="userId">#{user.googleId}</span>
                </div>
              </Stack>
            </div>
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Btn>프로필 수정</Btn>
            </NavLink>
            <>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} id="modal-modal-title">
                  <Box
                    sx={{
                      margin: "20px auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "60%",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "140px",
                        height: "140px",
                        marginBottom: "30px",
                      }}
                    ></Avatar>
                    <TextField
                      name="name"
                      label="별명을 입력해주세요"
                      variant="outlined"
                      value={user.name}
                      style={{ width: "100%", margin: "10px auto" }}
                      onChange={(e) => {
                        console.log(
                          document
                            .getElementsByName("name")[0]
                            .getAttribute("value")
                        );
                        console.log(e.target.value);
                        document
                          .getElementsByName("name")[0]
                          .setAttribute("value", "바뀜");
                      }}
                    />
                    <TextField
                      name="email"
                      label="이메일을 입력해주세요"
                      variant="outlined"
                      value={user.e_address}
                      style={{ width: "100%", margin: "10px auto" }}
                      // onChange={onChangeValue}
                    />
                    <TextField
                      name="address"
                      label="사는 지역을 입력해주세요"
                      variant="outlined"
                      value={user.address}
                      style={{ width: "100%", margin: "10px auto" }}
                      // onChange={onChangeValue}
                    />
                  </Box>

                  <Button
                    sx={{
                      backgroundColor: "#ff6f0f",
                      width: "100%",
                      borderRadius: "0px",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "18px",
                      position: "fixed",
                      bottom: "0px",
                      "&:hover": {
                        backgroundColor: "#ff6f0f",
                      },
                    }}
                    onClick={() => {
                      let googleId = JSON.parse(
                        localStorage.getItem("sessionInfo")
                      ).googleId;

                      profileUpdate(googleId);
                    }}
                  >
                    완료
                  </Button>
                </Box>
              </Modal>
            </>
          </Toolbar>
        </div>
        <div className="second">
          <Stack direction="column" id="tempDiv">
            <Typography variant="h5" id="temperature">
              {user.temperature}°C
            </Typography>
            <GaugeBar name={user.temperature} />
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
              최근 3일 이내 활동({year}년 {month}월 {day}일 가입)
            </span>
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

export const profileUpdate = async (googleId) => {
  const response = await axios.patch(
    `http://localhost:8080/user/profileUpdate/${googleId}`,
    {
      name: `{user.name}`,
      address: `{address}`,
      e_address: `{email}`,
    }
  );
  return response.data;
};

export const getUser = async (googleId) => {
  const response = await axios.get(
    `http://localhost:8080/user/getUser/${googleId}`
  );
  return response.data;
};
