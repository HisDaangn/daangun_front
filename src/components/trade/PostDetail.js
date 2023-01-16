import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteModal from './DeleteModal';
import EditModal from '../../pages/trade/EditPost';
import { Link, useParams } from "react-router-dom";
import bad from "./img/bad.png";
import good from "./img/good.png";
import verygood from "./img/verygood.png";
import excellent from "./img/excellent.png";
import {
    Avatar,
    Box,
    Slider,
    Stack,
    createTheme,
    ThemeProvider,
    Modal,
} from "@mui/material";
const PostDetail = (props) => {
    const { postID } = useParams();
    //GET 상세 게시글 조회
    async function getData() {
        try {
            //응답 성공
            const response = await axios.get(`http://localhost:8080/trade/${postID}`)
                .then(response => {
                    setValue(response.data);
                });
            console.log(response);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    const [value, setValue] = useState([]);
    //PATCH 끌어올리기
    async function lift() {
        try {
            //응답 성공
            const response = await axios.patch(`http://localhost:8080/trade/lift/${postID}`, {
                expose_at: `${value.expose_at}`,
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
        backgroundColor: "white",
        borderRadius: "3px",
        fontWeight: "bold",
        fontSize: "10px",
        width: "80px",
        height: "30px",
        marginLeft: "10px",
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
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div style={{
            position: "relative",
            width: "100%",
            height: "100%",
        }}>
            <div style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "60%",
                height: "70%",
                transform: "translate(-50%, -50%)",
            }}>
                <img style={{
                    width: "100%",
                    height: "400px",
                }} src="https://www.shutterstock.com/image-photo/korean-spicy-instant-noodles-egg-260nw-1296771487.jpg" alt='img' />

                <div >
                    <Stack direction="row" spacing={5} justifyContent="center">

                        <Avatar src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
                        <Box sx={{ fontSize: 16, fontWeight: 'regiar' }}>username <br /> 포항시 흥해읍</Box>
                        <button style={BtnStyle} onClick={openEditModal}>수정하기</button>
                        <Modal
                            open={editModalOpen}
                            onClose={closeEditModal}
                        >
                            <Box sx={style}>
                                <EditModal {...value} />
                            </Box>
                        </Modal>
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
                <div>
                    <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 2 }}>{value.title}</Box>
                    <Box sx={{ fontSize: 16, fontWeight: 'bold', m: 2 }}>{value.price}원</Box>
                    <Box sx={{ fontSize: 16, fontWeight: 'regular', m: 2 }}>{value.content}</Box>
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