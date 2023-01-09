import styled from "@emotion/styled";
import { AppBar, Button, InputBase, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { theme } from "../../../theme/theme";
import Logo from "../../../assets/HomeLogo.png";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
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
        <Stack direction="row" spacing={4} style={{ marginLeft: "180px" }}>
          <img
            src={Logo}
            alt="Danggeun"
            style={{ width: "110px", height: "46px" }}
          />
          <Typo style={{ color: "#ff6f0f" }}>중고거래</Typo>
          <Typo>인기매물</Typo>
          <Typo>매물추가</Typo>
          <Typo>동네설정</Typo>
        </Stack>

        <Stack direction="row" spacing={1.5} marginRight="230px">
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
          <Btn>채팅하기</Btn>
          <Btn>마이페이지</Btn>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
}
