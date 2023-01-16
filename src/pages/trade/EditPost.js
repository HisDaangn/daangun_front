import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import "./EditModal.css";
import ImageUpload from '../../components/trade/ImageUpload';
import axios from 'axios';

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
const EditPost = (props) => {
  // const { postID } = useParams();
  const postID = 2;
  // //PATCH 게시글 수정
  async function edit({ photoURL, title, price, content }) {
    try {
      //응답 성공
      const response = await axios.patch(`http://localhost:8080/trade/${postID}`, {
        photoURL: `${photoURL}`,
        title: `${title}`,
        price: `${price}`,
        content: `${content}`,
      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  const { open, close } = props;
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
    <><div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <ThemeProvider theme={theme}>
              <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>중고거래 글 수정하기</Box>
            </ThemeProvider>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <ThemeProvider theme={theme}>
              <Button variant="outlined" startIcon={<CameraAltIcon />}>0/10</Button>
              <ImageUpload />
            </ThemeProvider>
            <Divider />
            <Grid>
              <Input placeholder="글제목" inputProps={ariaLabel} />
            </Grid>
            <Divider />
            <Input placeholder="가격" inputProps={ariaLabel} />
            <FormControlLabel className="form_control_label" control={<Checkbox defaultChecked />} label="나눔" />
            <Divider />
            <TextField
              id="standard-multiline-static"
              multiline
              rows={6}
              placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
              variant="standard"
            />
          </main>
          <footer>
            <button className="close" onClick={close} >
              저장하기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
    </>
  );
}
export default EditPost;