import styled from "@emotion/styled";
import { AppBar, Button, InputBase, Toolbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { theme } from "../../../theme/theme";
import Logo from "../../../assets/HomeLogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "white",
  borderColor: "divider",
});

const Typo = styled(Typography)({
  color: "#4d5159",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "19px",
  lineHeight: "50px",
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
  marginTop: "5px",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "block",
    cursor: "pointer",
  },
});

const Btn = styled(Button)({
  border: "1px solid #d1d3d8",
  padding: "5px 15px",
  color: "#212124",
  fontWeight: "bolder",
  fontSize: "16px",
});

export default function Header() {
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Stack direction="row" spacing={4}>
          <NavLink to={"/home"} style={{ textDecoration: "none" }}>
            <img
              src={Logo}
              alt="Danggeun"
              style={{ width: "110px", height: "46px" }}
            />
          </NavLink>

          <NavLink to={"/home"} style={{ textDecoration: "none" }}>
            <Typo style={{ color: "#ff6f0f" }}>중고거래</Typo>
          </NavLink>

          <NavLink to={"/chat"} style={{ textDecoration: "none" }}>
            <Typo>인기매물</Typo>
          </NavLink>

          <NavLink to={"/tradeboard"} style={{ textDecoration: "none" }}>
            <Typo>매물추가</Typo>
          </NavLink>
          <NavLink to={"/editpost"} style={{ textDecoration: "none" }}>
            <Typo>동네설정</Typo>
          </NavLink>
        </Stack>

        <Stack direction="row" spacing={1.5}>
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
          <Box>
            <SearchIcon></SearchIcon>
          </Box>
          <NavLink to={"/chat"} style={{ textDecoration: "none" }}>
            <Btn>채팅하기</Btn>
          </NavLink>
          <NavLink to={"/chat"} style={{ textDecoration: "none" }}>
            <Btn>마이페이지</Btn>
          </NavLink>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
}
