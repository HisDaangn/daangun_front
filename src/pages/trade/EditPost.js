import React, { useState, useRef } from 'react';
import "./EditModal.css";
import AWS from 'aws-sdk';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import {
  Box,
  TextField,
  Input,
  Checkbox, FormControlLabel, iconClasses,
} from "@mui/material";

const EditPost = (id) => {
  const [title, setTitle] = useState(id.title);
  const [price, setPrice] = useState(id.price);
  const [photoURL, setPhotoURL] = useState(id.photoURL);
  const [content, setContent] = useState(id.content);
  const [share, setShare] = useState(false);
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
  const checkShare = (e) => {
    setShare(true);
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
  return (
    <Box>
      <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>???????????? ??? ????????????</Box>
      <br />
      <div>
        <Row>
          <Col>
            <label htmlFor="ex_file">
              <img style={{ width: "50px", height: "30px" }} src={id.photoURL} alt="url" />
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
      <Input fullWidth sx={{ m: 1 }} placeholder="?????????" inputProps={ariaLabel} defaultValue={title} onChange={(event) => { setTitle(event.target.value) }} />
      <Input sx={{ m: 1 }} placeholder="??????" inputProps={ariaLabel} defaultValue={price} onChange={(event) => { share ? setPrice(0) : setPrice(event.target.value) }} />
      <FormControlLabel className="form_control_label" control={<Checkbox style={{ float: "right" }} onChange={(e) => checkShare(e)} />} label="??????" />
      <TextField
        fullWidth sx={{ m: 1 }}
        id="standard-multiline-static"
        multiline
        rows={6}
        placeholder="????????? ????????? ??????????????????. (?????? ?????? ????????? ????????? ????????? ??? ?????????.)"
        variant="standard"
        defaultValue={content}
        onChange={(event) => { setContent(event.target.value) }}
      />
      <br /><br /><br />
      <button style={BtnStyle} onClick={() => {
        edit();
        uploadFile(selectedFile);
      }}>
        ????????????
      </button>
    </Box>
  );
}
export default EditPost;