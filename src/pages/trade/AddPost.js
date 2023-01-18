import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios';
import ImageUpload from '../../components/trade/ImageUpload';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
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
import { Api } from '@mui/icons-material';


const AddPost = (props) => {
  
  const user = JSON.parse(localStorage.getItem("sessionInfo"))

  const navigate = useNavigate();

  const addItem = async (photoURL, title, price, content) => {
    const adding = await axios.post(
      `http://localhost:8080/trade/add`,
      {
        writerId: `${user.id}`,
        photoURL: `${photoURL}`,
        title: `${title}`,
        price: `${price}`,
        content: `${content}`,
        viewCnt: "0",
      },
    );
    return adding.data;
  };

  // const addSubmit = useCallback(async () => {
  //   try{
  //     const formData = new FormData();
  //     formData.append(photoURL);
  //     formData.append(title);
  //     formData.append(price);
  //     formData.append(content);

  //     await 
  //   }
  // })

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
    // float: "right",
    position: "absolute",
    right: "30px",
    bottom: "30px",
  }

  
  

  return (
    <Box>
    <ThemeProvider theme={theme}>
      <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>중고거래 글쓰기</Box>
    </ThemeProvider>
    <ThemeProvider theme={theme}>
      <Button variant="outlined" startIcon={<CameraAltIcon />}>0/10</Button>
      <ImageUpload />
    </ThemeProvider>
    <Divider />
    <Input placeholder="글제목" inputProps={ariaLabel} value= {addItem.title}/>
    <Divider />
    <Input placeholder="가격" inputProps={ariaLabel} value={addItem.price}/>
    <FormControlLabel className="form_control_label" control={<Checkbox defaultChecked />} label="나눔" />
    <Divider />
    <TextField
      id="standard-multiline-static"
      multiline
      rows={6}
      placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
      variant="standard"
      value = {addItem.content}
    />
    <button style={BtnStyle} onClick={addItem}>
      저장하기
    </button>
  </Box>
  );
}
export default AddPost;