import { CssBaseline, ThemeProvider, Box, Paper } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Router from "./Router";
import { theme } from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <CssBaseline />
        {/* <Header /> */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              pt: 3,
              mt: 0,
              width: "100%",
              height: "auto",
            },
            padding: 0,
            margin: 0,
          }}
        >
          <Paper elevation={0}>
            <Router />
          </Paper>
        </Box>
        {/* <Footer /> */}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
