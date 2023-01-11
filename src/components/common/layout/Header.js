import styled from "@emotion/styled";
import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { theme } from "../../../theme/theme";
import Logo from "../../../assets/HomeLogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
import Btn from "./Btn.js";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "white",
  borderColor: "divider",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
});

const Typo = styled(Typography)({
  color: "#4d5159",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "19px",
  lineHeight: "50px",
  [theme.breakpoints.down("md")]: {
    display: "none",
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

const Hamberger = styled(MenuIcon)({
  color: "black",
  fontSize: "30px",
  fontWeight: "lighter",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

export default function Header() {
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <NavLink to={"/home"} style={{ textDecoration: "none" }}>
          <img
            src={Logo}
            alt="Danggeun"
            style={{ width: "110px", height: "46px" }}
          />
        </NavLink>
        <Stack direction="row" spacing={4}>
          <NavLink to={"/home"} className="navbarTypo">
            <Typo style={{ color: "#ff6f0f" }}>중고거래</Typo>
          </NavLink>

          <NavLink to={"/viewpost"} className="navbarTypo">
            <Typo>인기매물</Typo>
          </NavLink>

          <NavLink to={"/tradeboard"} className="navbarTypo">
            <Typo>매물추가</Typo>
          </NavLink>
          <NavLink to={"/editpost"} className="navbarTypo">
            <Typo>동네설정</Typo>
          </NavLink>
        </Stack>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{ display: "flex", alignItems: "center" }}
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
          <SearchIcon></SearchIcon>
          <NavLink to={"/chat"} style={{ textDecoration: "none" }}>
            <Btn>채팅하기</Btn>
          </NavLink>
          <NavLink to={"/mypage"} style={{ textDecoration: "none" }}>
            <Btn>마이페이지</Btn>
          </NavLink>
          <Hamberger onClick={() => {}} />
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
}
