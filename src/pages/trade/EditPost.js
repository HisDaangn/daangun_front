import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";

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
  async function edit() {
    // console.log(id.id);
    //응답 성공
    console.log(id.title);
    const response = await axios.patch(`http://localhost:8080/trade/lift/${id.id}`, {
      // photoURL: `${id.photoURL}`,
      title: `${id.title}`,
      price: `${id.price}`,
      content: `${id.content}`,
    });
    console.log(id.title);
    return response.data;
  }
  const onSave = saveBtn => {
    console.log("saveBtn click !");
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
        <Button variant="outlined" startIcon={<CameraAltIcon />}>0/10</Button>
        <ImageUpload />
      </ThemeProvider>
      <Divider />
      <Input placeholder="글제목" inputProps={ariaLabel} value={id.title} />
      <Divider />
      <Input placeholder="가격" inputProps={ariaLabel} value={id.price} />
      <FormControlLabel className="form_control_label" control={<Checkbox style={{ float: "right" }} defaultChecked />} label="나눔" />
      <Divider />
      <TextField
        id="standard-multiline-static"
        multiline
        rows={6}
        placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
        variant="standard"
        value={id.content}
      />
      <button style={BtnStyle} onClick={edit}>
        저장하기
      </button>

    </Box>

  );

}
export default EditPost;