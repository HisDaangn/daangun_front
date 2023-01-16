import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteModal from './DeleteModal';
import EditModal from '../../pages/trade/EditPost';
import { Link, useParams } from "react-router-dom";
import bad from "./img/bad.png";
import good from "./img/good.png";
import verygood from "./img/verygood.png";
import excellent from "./img/excellent.png";

import  './Cards.css';
import {
    Avatar,
    Box,
    Slider,
    Stack,
    createTheme, ThemeProvider
} from "@mui/material";
const PostDetail = (props) => {
    const { postID } = useParams();
    //GET 상세 게시글 조회
    async function getData() {
        try {
            //응답 성공
            const response = await axios.get(`http://localhost:8080/trade/${postID}`);
            console.log(response);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    //PATCH 끌어올리기
    async function lift({ expose_at }) {
        try {
            //응답 성공
            const response = await axios.patch(`http://localhost:8080/trade/lift/${postID}`, {
                expose_at: `${expose_at}`,
            });
            console.log(response);
            console.log("liftBtn click !");
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    const temperature = 36.7;
    // const [temperature, setTemperature] = useState();
    const theme = createTheme({
        palette: {
            bad: {
                main: '#1561a9',
            },
            good: {
                main: '#319e45',
            },
            verygood: {
                main: '#df9100',
            },
            excelent: {
                main: '#de5d06',
            },
        },
    });
    const [color, setColor] = useState("#1561a9");
    const [img, setImg] = useState();
    useEffect(() => {
        if (temperature < 36.5) {
            setColor("bad");
            setImg(bad);
        } else if (temperature < 40) {
            setColor("#319e45");
            setImg(good);
        } else if (temperature < 50) {
            setColor("#df9100");
            setImg(verygood);
        } else {
            setColor("#de5d06");
            setImg(excellent);
        }
    }, [temperature]);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const openDeleteModal = () => {
        setDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };
    const [editModalOpen, setEditModalOpen] = useState(false);

    const openEditModal = () => {
        setEditModalOpen(true);
    };
    const closeEditModal = () => {
        setEditModalOpen(false);
    };
    const onChat = chatBtn => {
        console.log("chatBtn click !");
    }
    const onLift = liftBtn => {
        console.log("liftBtn click !");
    }
    const BtnStyle = {
        border: "1px solid #d1d3d8",
        padding: "5px 15px",
        color: "#212124",
        fontWeight: "bolder",
        fontSize: "13px",
    }
    const staticBtnStyle = {
        color: "white",
        backgroundColor: "#ed7833",
        borderRadius: "50px",
        fontWeight: "bold",
        fontSize: "10px",
        width: "80px",
        height: "30px",
        border: "none",
        marginLeft: "10px",
    }
    return (
        <div>
            <div className="detail-container">
                <img className="detail-img" src= "/img/Ramen.webp" alt='img' />
                <div className="detail-profile">
                    <Stack direction="row" spacing={5} justifyContent="center">
                    
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
                        <Box sx={{ fontSize: 20, fontWeight: 'regiar' }}>username</Box>
                        <button style={BtnStyle} onClick={openEditModal}>수정하기</button>
                        <EditModal open={editModalOpen} close={closeEditModal}></EditModal>
                        <button style={BtnStyle} onClick={openDeleteModal}>삭제하기</button>
                        <DeleteModal open={deleteModalOpen} close={closeDeleteModal} header="Modal heading">
                            게시물이 삭제됩니다!
                        </DeleteModal>
                        <ThemeProvider theme={theme}>
                            <Slider color='good' sx={{ width: "150px" }} value={temperature} aria-label="Default" valueLabelDisplay="auto" />
                        </ThemeProvider>
                        <Avatar alt="img" src={img} />
                    </Stack>
                </div>
                <hr />
                <div className="detail-content">
                    <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 2 }}>라면 사실 분~</Box>
                    <Box sx={{ fontSize: 16, fontWeight: 'bold', m: 2 }}>1,500원</Box>
                    <Box sx={{ fontSize: 16, fontWeight: 'regular', m: 2 }}>새벽이라서 팔아봅니다~</Box>
                </div>
                <Stack direction="row" justifyContent="flex-end">
                    <Link to={"/chat"} style={{ textDecoration: "none" }}>
                        <button style={staticBtnStyle} onClick={onChat}>채팅하기</button>
                    </Link>
                    <button style={staticBtnStyle} onClick={lift}>끌올하기</button>
                </Stack>
            </div >
        </div >
    )
}
export default PostDetail;