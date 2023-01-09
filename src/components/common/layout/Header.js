import { Container } from "@mui/system";
import { AppBar, Box, Toolbar, Button } from "@mui/material";

import React from "react";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        width: "100%",
        boxShadow: 0,
      }}
    >
      <Toolbar sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
        <Box sx={{ flexGrow: 1 }} />

        <Button>확인</Button>
      </Toolbar>
    </AppBar>
  );
}
