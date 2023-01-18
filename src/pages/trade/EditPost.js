import React, { useState, useRef } from 'react';
import "./EditModal.css";
import AWS from 'aws-sdk';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

import {
  Box,
  createTheme,
  ThemeProvider,
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
  const fileInput = useRef();

  const edit = async () => {
    await axios.patch(`http://localhost:8080/trade/${id.id}`, {
      photoURL: `${photoURL}`,
      title: `${title}`,
      price: `${price}`,
      content: `${content}`,
    }).then(id.close);
  }
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
        <div>
          <Row>
            <Col>
              <label htmlFor="ex_file">
                <img style={{ maxWidth: "100px" }} src={id.photoURL} alt="url" />
                <br />
              </label>
              {/* <Input style={{ display: "none" }} id="ex_file" color="primary" type="file" onChange={(event) => {
                setPhotoURL('https://' + S3_BUCKET + '.s3.' + REGION + '.amazonaws.com/' + event.target.value);
                handleFileInput(event);
              }}
                ref={fileInput}
              /> */}
              <Input style={{ display: "none" }} id="ex_file" color="primary" type="file" onChange={(event) => {
                setPhotoURL('https://' + S3_BUCKET + '.s3.' + REGION + '.amazonaws.com/' + document.getElementById("ex_file").files[0].name);
                handleFileInput(event);

              }}
                ref={fileInput}
              />
            </Col>
          </Row>
        </div>
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
      <button style={BtnStyle} onClick={() => {
        edit();
        uploadFile(selectedFile);
      }}>
        저장하기
      </button>
    </Box>
  );
}
export default EditPost;