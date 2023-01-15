import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../../theme/theme";

const Btn = ({ children }) => {
  const But = styled(Button)({
    border: "1px solid #d1d3d8",
    padding: "5px 15px",
    color: "#212124",
    fontWeight: "bolder",
    fontSize: "16px",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  });
  return <But>{children}</But>;
};

export default Btn;
