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
  Grid,
  Divider,
  TextField,
  Input,
  Checkbox, FormControlLabel,
} from "@mui/material";
const EditPost = (props) => {
  const [data, setData] = useState({
    id: null
  });
  useEffect(() => {
    if (props.data) {
      setData(prevState => ({
        ...prevState,
        id: props.data.id
      }));
    }
  }, [props.data]);
  const onChangeHandler = useCallback((type, event) => {
    setData(prevState => ({
      ...prevState,
      [type]: event.value
    }))
  }, [data]);
  const { postID } = useParams();
  // //PATCH 게시글 수정
  const edit = async () => {
    // const response = await axios.patch(`http://localhost:8080/trade/${postID}`, {
    //   // photoURL: `${photoURL}`,
    //   title: `${title}`,
    //   // price: `${price}`,
    //   // content: `${content}`,
    // });

    // //응답 실패
    // console.log("edit!");

    // return response.data;
    try {
      //응답 성공
      const response = await axios.patch(`http://localhost:8080/trade/lift/${postID}`, {
        // photoURL: `${value.photoURL}`,
        title: `${data.title}`,
        // price: `${value.price}`,
        // content: `${value.content}`,

      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
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
    // float: "right",
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
      <Input placeholder="글제목" inputProps={ariaLabel} value={data.title} />
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
      <button style={BtnStyle} onClick={edit}>
        저장하기
      </button>

    </Box>

  );

}
export default EditPost;