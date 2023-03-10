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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Footer from "../common/layout/Footer";

export default function Mypage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "600px",
    height: "50%",
    bgcolor: "white",
    boxShadow: 24,
  };

  const [user, setUser] = useState({});
  const [sales, setSales] = useState({});
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  const [nameContent, setNameContent] = useState();
  const [addressContent, setAddressContent] = useState();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  function changeColor(temperature) {
    const temp = document.getElementById("temperature");
    if (temperature > 70) {
      temp.style.color = "tomato";
    } else if (temperature > 50) {
      temp.style.color = "orange";
    } else if (temperature > 34) {
      temp.style.color = "#76c545";
    } else if (temperature > 1) {
      temp.style.color = "#5f7592";
    }
  }

  //Mypage 한 번만 실행
  useEffect(() => {
    async function fetchData() {
      const userDB = await getUser(
        JSON.parse(localStorage.getItem("sessionInfo")).googleId
      );
      const salesDB = await getData("4");

      setSales(salesDB);
      setUser(userDB);
      setYear(userDB.created_at.substr(0, 4));
      setMonth(userDB.created_at.substr(5, 2));
      setDay(userDB.created_at.substr(8, 2));
    }
    fetchData();
  }, []);
  useEffect(() => {
    changeColor(user.temperature);
  });
  return (
    <>
      <Box sx={{ height: "880px" }}>
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
                      <span id="userId">{user.e_address}</span>
                      <span id="address">{user.address}</span>
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
                          margin: "40px auto",
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
                          required
                          name="name"
                          label="별명을 입력해주세요"
                          variant="outlined"
                          style={{ width: "100%", margin: "10px auto" }}
                          defaultValue={user.name}
                          onChange={(e) => {
                            setNameContent(e.target.value);
                          }}
                        />
                        <TextField
                          required
                          name="address"
                          label="사는 지역을 입력해주세요"
                          variant="outlined"
                          defaultValue={user.address}
                          onChange={(e) => {
                            setAddressContent(e.target.value);
                          }}
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

                          if (
                            nameContent === undefined &&
                            addressContent === undefined
                          ) {
                            profileUpdate(googleId, user.name, user.address);
                          } else if (nameContent === undefined) {
                            profileUpdate(googleId, user.name, addressContent);
                          } else if (addressContent === undefined) {
                            profileUpdate(googleId, nameContent, user.address);
                          } else {
                            profileUpdate(
                              googleId,
                              nameContent,
                              addressContent
                            );
                          }
                          setOpen(false);
                          window.location.reload();
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
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    let sht = document.getElementById("salesHistoryTab");
                    sht.style.display = "block";
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
                  <img
                    src={watchlist}
                    style={{ width: "70px", height: "70px" }}
                  />
                  <span>관심 목록</span>
                </Stack>
              </Toolbar>
            </div>
            <Box id={"salesHistoryTab"} sx={{ width: "100%", display: "none" }}>
              <hr style={{ opacity: "50%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                  }}
                >
                  <img src={sales.photoURL} />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ lineHeight: "30px" }}>{sales.title}</span>
                    <span style={{ paddingTop: "3px" }}>
                      <MoreVertIcon />
                    </span>
                  </div>
                  <div>
                    <span>주소 </span>
                    <span>{sales.created_at} </span>
                    <span>{sales.view_cnt}</span>
                  </div>
                  <div>
                    <span>거래현황</span>
                    <span>{sales.price}</span>
                  </div>
                  <div>
                    <span>채팅횟수</span>
                    <span>관심개수</span>
                  </div>
                </div>
              </Box>
            </Box>
            <div className="fourth">
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
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
      </Box>
      <Footer />
    </>
  );
}

export const profileUpdate = async (googleId, name, address) => {
  await axios.patch(`http://localhost:8080/user/profileUpdate/${googleId}`, {
    name: `${name}`,
    address: `${address}`,
  });
  console.log(name, address);
};

export const getUser = async (googleId) => {
  const response = await axios.get(
    `http://localhost:8080/user/getUser/${googleId}`
  );
  return response.data;
};

//GET 상세 게시글 조회
export const getData = async (writerID) => {
  try {
    //응답 성공
    const response = await axios.get(`http://localhost:8080/trade/${writerID}`);
    return response.data;
  } catch (error) {
    //응답 실패
    console.error(error);
  }
};
