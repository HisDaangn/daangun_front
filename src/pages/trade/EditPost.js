import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import "./EditModal.css";
import ImageUpload from '../../components/trade/ImageUpload';
import axios from 'axios';
import {
  Box,
  createTheme,
  ThemeProvider,
  Button,
  Divider,
  TextField,
  Input,
  Checkbox, FormControlLabel,
} from "@mui/material";

const EditPost = (id) => {
  const [title, setTitle] = useState(id.title);
  const [price, setPrice] = useState(id.price);
  const [photoURL, setPhotoURL] = useState(id.photoURL);
  const [content, setContent] = useState(id.content);
  const edit = async (
  ) => {
    await axios.patch(`http://localhost:8080/trade/${id.id}`, {
      photoURL: `${id.photoURL}`,
      title: `${title}`,
      price: `${price}`,
      content: `${content}`,
    }).then(id.close);
  }
  const ariaLabel = { 'aria-label': 'description' };
  const BtnStyle = {
    color: "white",
    backgroundColor: "#ed7833",
    borderRadius: "3px",
    fontWeight: "bold",
    fontSize: "10px",
    width: "80px",
    height: "30px",
    marginLeft: "10px",
    border: "none",
    position: "absolute",
    right: "30px",
    bottom: "30px",
  }
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
    <Box>
      <ThemeProvider theme={theme}>
        <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>중고거래 글 수정하기</Box>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" startIcon={<CameraAltIcon />}>{id.photoURL}</Button>
        <ImageUpload />
      </ThemeProvider>
      <Divider />
      <Input placeholder="글제목" inputProps={ariaLabel} defaultValue={title} onChange={(event) => { setTitle(event.target.value) }} />
      <Divider />
      <Input placeholder="가격" inputProps={ariaLabel} defaultValue={price} onChange={(event) => { setPrice(event.target.value) }} />
      <FormControlLabel className="form_control_label" control={<Checkbox style={{ float: "right" }} defaultChecked />} label="나눔" />
      <Divider />
      <TextField
        id="standard-multiline-static"
        multiline
        rows={6}
        placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
        variant="standard"
        defaultValue={content}
        onChange={(event) => { setContent(event.target.value) }}
      />
      <button style={BtnStyle} onClick={edit}>
        저장하기
      </button>

    </Box>

  );

}
export default EditPost;