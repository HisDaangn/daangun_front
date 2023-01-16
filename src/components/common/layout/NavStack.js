import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { theme } from "../../../theme/theme";

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

const NavStack = ({ isOpen }) => {
  return (
    <Nstack direction="row" spacing={4} className="navbarMenu">
      <CusNavLink to={"/home"}>
        <Typo style={{ color: "#ff6f0f" }}>중고거래</Typo>
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
  );
};

export default NavStack;
