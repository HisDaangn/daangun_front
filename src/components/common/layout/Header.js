import styled from "@emotion/styled";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { theme } from "../../../theme/theme";
import Logo from "../../../assets/HomeLogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
import Btn from "./Btn.js";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import GoogleButton from "./GoogleButton";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "white",
  width: "90%",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "64px",
  },

  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    minHeight: "64px",
  },
});

const Search = styled("div")({
  backgroundColor: "#F2F3F6",
  padding: "4px 12px",
  borderRadius: theme.shape.borderRadius,
  width: "280px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
});

const SearchIcon = styled(SearchOutlinedIcon)({
  color: "black",
  fontSize: "30px",
  opacity: "70%",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "block",
    cursor: "pointer",
  },
});

const Berger = styled(MenuIcon)({
  color: "black",
  fontSize: "30px",
  fontWeight: "lighter",
  cursor: "pointer",
  marginTop: "4px",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

const Close = styled(CloseIcon)({
  color: "yellow",
  fontSize: "30px",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

const Typo = styled(Typography)({
  color: "#4d5159",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "18px",
  lineHeight: "50px",
  textAlign: "center",
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    display: "none",
  },
});

const Nstack = styled(Stack)({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
});

const CusNavLink = styled(NavLink)({
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    float: "left",
  },
});

export default function Header() {
  const [isOpen, setOpen] = useState(true);
  const [sessionInfo, setSessionInfo] = useState(
    JSON.parse(localStorage.getItem("sessionInfo"))
  );
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("sessionInfo")) !== null) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <StyledToolbar>
          <Nstack direction="row" spacing={4}>
            <NavLink to={"/home"} className="nav_logo">
              <img
                src={Logo}
                alt="Danggeun"
                style={{
                  width: "110px",
                  height: "46px",
                }}
              />
            </NavLink>
            {/* color: "#ff6f0f" */}
            <CusNavLink to={"/home"}>
              <Typo>중고거래</Typo>
            </CusNavLink>

            <CusNavLink to={"/viewpost"}>
              <Typo>인기매물</Typo>
            </CusNavLink>

            <CusNavLink to={"/tradeboard"}>
              <Typo>매물추가</Typo>
            </CusNavLink>
            <CusNavLink to={"/chat"}>
              <Typo>채팅하기</Typo>
            </CusNavLink>
          </Nstack>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid black",
            }}
          >
            <Search>
              <InputBase
                placeholder="물품이나 동네를 검색해보세요"
                sx={{
                  fontSize: "15px",
                  width: "100%",
                  color: "#212124",
                  fontWeight: "400",
                }}
              />
            </Search>

            {isLogin ? (
              <>
                <SearchIcon className="nav_search" />
                <NavLink to={"/mypage"} style={{ textDecoration: "none" }}>
                  <Btn>마이페이지</Btn>
                </NavLink>
                <NavLink
                  onClick={() => {
                    let isLogout = window.confirm("로그아웃 하시려구요?");
                    if (isLogout) {
                      localStorage.clear();
                      window.location.reload();
                    }
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <Btn>로그아웃</Btn>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    const gBtn = document.getElementById("gBtn");
                    gBtn.firstChild.firstChild.firstChild.firstChild.click();
                  }}
                >
                  <Btn>로그인</Btn>
                </NavLink>

                <Box display={"none"} id="gBtn">
                  <GoogleButton />
                </Box>
              </>
            )}

            <Box>
              {isOpen ? (
                <Berger
                  className="nav_berger"
                  onClick={() => {
                    setOpen((current) => !current);
                    console.log(isOpen);
                  }}
                />
              ) : (
                <Close
                  className="nav_close"
                  onClick={() => {
                    setOpen((e) => !e);
                    console.log(isOpen);
                  }}
                />
              )}
            </Box>
          </Stack>
        </StyledToolbar>
      </AppBar>
      {/* <MuiDrawer /> */}
    </>
  );
}
