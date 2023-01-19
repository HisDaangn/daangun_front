import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import AWS from 'aws-sdk';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {
  Box,
  TextField,
  Input,
  Button,
  Checkbox, FormControlLabel,
} from "@mui/material";


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

  const [selectedFile, setSelectedFile] = useState(null);
  const ACCESS_KEY = 'AKIA3ZKVKUTIGQBPZ2CB';
  const SECRET_ACCESS_KEY = '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';
  const REGION = "ap-northeast-2";
  const S3_BUCKET = 'hisdaangn';

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    };

    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        setTimeout(() => {
          setSelectedFile(null);
        }, 3000)
      })
      .send((err) => {
        if (err) console.log(err)
      })
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

  
  

  return (
    <Box>
      <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>중고거래 글쓰기</Box>
      <br />
      <div>
        <Row>
          <Col>
            <label htmlFor="ex_file">
            <img style={{ width: "50px", height: "30px" }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vPBRhfTywuwJGnpnUj-jesurCPI7Cw-L_w&usqp=CAU"} alt="url" />
            {/* <Button variant="outlined" startIcon={<CameraAltIcon />}></Button> */}
              <br />
            </label>
            <Input style={{ display: "none" }} id="ex_file" color="primary" type="file" onChange={(event) => {
              setPhotoURL('https://' + S3_BUCKET + '.s3.' + REGION + '.amazonaws.com/' + document.getElementById("ex_file").files[0].name);
              handleFileInput(event);
            }}
            />
          </Col>
        </Row>
      </div>
     <hr style={{ marginLeft: "10px" }} />
    <Input placeholder="글제목" inputProps={ariaLabel} onChange={(event)=>setTitle(event.target.value)} />
    <Input placeholder="가격" inputProps={ariaLabel} onChange={(event)=>setPrice(event.target.value)}/>
    <FormControlLabel className="form_control_label" control={<Checkbox defaultChecked />} label="나눔" />
    <TextField
    fullWidth sx={{ m: 1 }}
      id="standard-multiline-static"
      multiline
      rows={6}
      placeholder="게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)"
      variant="standard"
      onChange={(event)=>setContent(event.target.value)}
      // value = {addItem.content}
    />
    <button style={BtnStyle} onClick={() => {
        addItem();
        uploadFile(selectedFile);
      }}>
      저장하기
    </button>
  </Box>
  );
}
export default AddPost;