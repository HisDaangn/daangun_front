import React from "react";
import { Box, Typography, IconButton, Drawer, Icon } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const MuiDrawer = () => {
  const Typo = styled(Typography)({
    color: "#4d5159",
    fontWeight: "400",
    cursor: "pointer",
    fontSize: "16px",
    lineHeight: "50px",
  });

  return (
    <Box
      p={2}
      width="100%"
      sx={{ backgroundColor: "white", display: "none" }}
      className="drawer"
    >
      <Stack direction="column">
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
    </Box>
  );
};

export default MuiDrawer;
