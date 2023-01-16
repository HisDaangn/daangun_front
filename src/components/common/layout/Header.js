import styled from "@emotion/styled";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { theme } from "../../../theme/theme";
import Logo from "../../../assets/HomeLogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
import Btn from "./Btn.js";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import GoogleButton from "./GoogleButton";
import axios from "axios";

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
  color: "black",
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
            <CusNavLink to={"/editpost"}>
              <Typo>동네설정</Typo>
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
            <SearchIcon className="nav_search" />
            {/* <NavLink to={"/chat"} style={{ textDecoration: "none" }}>
              <Btn>채팅하기</Btn>
            </NavLink>
            <NavLink to={"/mypage"} style={{ textDecoration: "none" }}>
              <Btn>마이페이지</Btn>
            </NavLink> */}

            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => {
                const gBtn = document.getElementById("gBtn");
                gBtn.childNodes[0].firstChild.click();
              }}
            >
              <Btn>로그인</Btn>
            </NavLink>

            <Box display={"none"} id="gBtn">
              <GoogleButton />
            </Box>

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

export const signup = async (e_address, name, googleId, address) => {
  const ret = await axios.post(`localhost:8080/user/signup`, {
    e_address: `{e_address}`,
    name: `{name}`,
    temperature: `36.5`,
    googldId: `{googldId}`,
    address: `{address}`,
  });
  return ret.data;
};

export const getUser = async (googleId) => {
  const response = await axios.get(`localhost:8080/user/getUser/${googleId}`, {
    e_address: `{e_address}`,
    name: `{name}`,
    created_at: `{created_at}`,
    temperature: `36.5`,
    googldId: `{googldId}`,
    address: `{address}`,
  });
  return response.data;
};
