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


const AddPost = ({onclose}) => {

  const [user, setUser] = useState();
  const [userInit, setUserInit] = useState(false);
  const [photoURL, setPhotoURL] = useState("www.google.com");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [content, setContent] = useState("");
  const [view, setView] = useState(0);
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("sessionInfo")));
  }, [])
  
  
  const navigate = useNavigate();
 

  const addItem = async () => {
    await axios.post(
      `http://localhost:8080/trade/add`,
      {
        writerId: `${user.id}`,
        photoURL: `${photoURL}`,
        title: `${title}`,
        price: `${price}`,
        content: `${content}`,
        viewCnt: `${view}`,
      }
    );
    onclose();
    
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
    <Input placeholder="글제목" inputProps={ariaLabel} onChange={(event)=>setTitle(event.target.value)} />
    <Divider />
    <Input placeholder="가격" inputProps={ariaLabel} onChange={(event)=>setPrice(event.target.value)}/>
    <FormControlLabel className="form_control_label" control={<Checkbox defaultChecked />} label="나눔" />
    <Divider />
    <TextField
      id="standard-multiline-static"
      multiline
      rows={6}
      placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
      variant="standard"
      onChange={(event)=>setContent(event.target.value)}
      // value = {addItem.content}
    />
    <button style={BtnStyle} onClick={addItem}>
      저장하기
    </button>
  </Box>
  );
}
export default AddPost;