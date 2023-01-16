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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              pt: 3,
              mt: 0,
              width: "100%",
              height: "fit-content",
            },
            padding: 0,
            margin: 0,
          }}
        >
          <Paper elevation={0}>
            <Router />
          </Paper>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
