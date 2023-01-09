import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {
  Box,
  createTheme,
  ThemeProvider,
  Button,
  Grid,
  Divider,
  TextField,
  Input,
  Checkbox, FormControlLabel,
} from "@mui/material";
function AddPost() {
  const ariaLabel = { 'aria-label': 'description' };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ed7833',
      }
    },
  });
  return (
    <>
      <div>
        <br />
        <Grid container spacing={3}>
          <ThemeProvider theme={theme}>
            <Button startIcon={<ClearIcon />}></Button>
            <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>중고거래 글 수정하기</Box>
            <Button color="secondary">완료</Button>
          </ThemeProvider>
        </Grid>
        <Divider />
        <Grid>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<CameraAltIcon />}>0/10</Button>
          </ThemeProvider>
        </Grid>
        <Divider />
        <Grid>
          <Input placeholder="글제목" inputProps={ariaLabel} />
        </Grid>
        <Divider />
        <Input placeholder="가격" inputProps={ariaLabel} />
        <FormControlLabel control={<Checkbox defaultChecked />} label="나눔" />
        <Divider />
        <TextField
          id="standard-multiline-static"
          multiline
          rows={6}
          placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
          variant="standard"
        />
      </div>
    </>
  );
}
export default AddPost;
