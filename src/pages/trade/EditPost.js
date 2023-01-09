import './AddPost.css'
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {
  Box,
  createTheme,
  ThemeProvider,
  Button,
  Grid,
} from "@mui/material";
function EditPost() {
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
        <Grid container spacing={3}>
          <ThemeProvider theme={theme}>
            <Button startIcon={<ClearIcon />}></Button>
            <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>중고거래 글 수정하기</Box>
            <Button color="secondary">완료</Button>
          </ThemeProvider>
        </Grid>
      </div>
      <hr />
      <div>
        <Grid>
          <ThemeProvider theme={theme}>
            <Button startIcon={<CameraAltIcon />}>0/10</Button>
          </ThemeProvider>
        </Grid>
      </div>
      <hr />
      <div>
        <Grid>
          <input placeholder="글제목"></input>
        </Grid>
      </div>
      <hr />
      <div>
        <input placeholder="가격"></input>
        <input type="checkbox" id="share" name="share" value="나눔" />
        <label htmlFor="share">나눔</label>
      </div>
      <hr />
      <div className="contents">
        <textarea placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"></textarea>
      </div>
    </>
  );
}
export default EditPost;
