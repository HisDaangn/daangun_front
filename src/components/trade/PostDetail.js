import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "./DeleteModal";
import EditModal from "../../pages/trade/EditPost";
import { useParams } from "react-router-dom";
import bad from "./img/bad.png";
import good from "./img/good.png";
import verygood from "./img/verygood.png";
import excellent from "./img/excellent.png";
import "./PostDetail.css";

import "./Cards.css";
import {
    Avatar,
    Box,
    Slider,
    Stack,
    createTheme,
    ThemeProvider,
    Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostDetail = (props) => {
    const { postID } = useParams();
    const [value, setValue] = useState([]);
    const [writer, setWriter] = useState();
    const [init, setInit] = useState(false);
    const [color, setColor] = useState("#1561a9");
    const [img, setImg] = useState();
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [chatRoomId, setChatRoomId] = useState("");
    const [loginmy, setLoginMy] = useState(false);
    const [loginchat, setLoginChat] = useState(false);
    const [loginlift, setLoginLift] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const userDB = JSON.parse(localStorage.getItem("sessionInfo"));
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'hisdaangn';

    const del = async () => {
        console.log("del 실행");
        await deleteData();
        closeDeleteModal();
    };
    useEffect(
        function () {
            if (chatRoomId !== "") {
                if (chatRoomId === "deleted") {
                    alert("삭제된 물품입니다");
                } else {
                    navigate(`/chat/room/${chatRoomId}`);
                }
            }
        },
        [chatRoomId]
    );
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        if (init) setWriter(value.writer);
    }, [init]);
    useEffect(() => {
        if (init) {
            if (writer.temperature < 36.5) {
                setColor("black");
                setImg(bad);
            } else if (writer.temperature < 40) {
                setColor("#1561a9");
                setImg(good);
            } else if (writer.temperature < 50) {
                setColor("#df9100");
                setImg(verygood);
            } else {
                setColor("#de5d06");
                setImg(excellent);
            }
        }
    }, [init]);
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
    useEffect(() => {
        if (init) {
            const gId = JSON.parse(localStorage.getItem("sessionInfo"))?.id;
            if (gId == null) {
                // alert("로그인부터 해주세용");
                setIsLogin(false);
                setLoginChat(true);
            }
            else {
                setIsLogin(true);
                if (gId == writer.id) {
                    setLoginMy(true);
                    setLoginLift(true);
                }
                else setLoginChat(true);
            }
            console.log("gId: " + gId);
            console.log("writer.id: " + writer.id);
        }
    }, [init])
    useEffect(
        function () {
            if (chatRoomId !== "") {
                if (chatRoomId === "deleted") {
                    alert("삭제된 물품입니다");
                } else {
                    navigate(`/chat/room/${chatRoomId}`);
                }
            }
        },
        [chatRoomId]
    );
    // POST
    async function moveToChatRoom() {
        try {
            const response = await axios.post(`http://localhost:8080/chat/add`, {
                pubId: writer.id,
                subId: userDB.id,
                postId: postID,
            });
            setChatRoomId(response.data);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
    //GET 상세 게시글 조회
    async function getData() {
        try {
            //응답 성공
            await axios
                .get(`http://localhost:8080/trade/${postID}`)
                .then((response) => {
                    setValue(response.data);
                    setWriter(response.data.writer);
                });
            setInit(true);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    //PATCH 끌어올리기
    async function lift() {
        try {
            //응답 성공
            const response = await axios.patch(
                `http://localhost:8080/trade/lift/${postID}`,
                {
                    expose_at: `${value.expose_at}`,
                }
            );
            console.log(response);
            console.log("liftBtn click !");
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    //DELETE 삭제하기
    async function deleteData() {
        try {
            //응답 성공
            const response = await axios.delete(
                `http://localhost:8080/trade/${postID}`
            );
            console.log(response);
            console.log(postID);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    const openDeleteModal = () => {
        setDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const openEditModal = () => {
        setEditModalOpen(true);
    };
    const closeEditModal = () => {
        setEditModalOpen(false);
        window.location.reload();
    };
    const onChat = chatBtn => {
        console.log("chatBtn click !");
        if (isLogin)
            moveToChatRoom();
        else alert("로그인 먼저 해주세요");
    }
    const BtnStyle = {
        border: "1px solid #d1d3d8",
        padding: "5px 15px",
        color: "#212124",
        fontWeight: "bolder",
        fontSize: "16px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginLeft: "10px",
        marginTop: "14px",
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
    const delBtn = {
        color: "white",
        backgroundColor: "#ed7833",
        borderRadius: "3px",
        fontWeight: "bold",
        fontSize: "10px",
        width: "80px",
        height: "30px",
        marginLeft: "10px",
        border: "none",
        float: "right",
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
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "40%",
                    width: "33%",
                    height: "70%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <img style={{
                    width: "100%",
                    height: "400px",
                }} src={value.photoURL} />

                <br /><br />
                <div>
                    <Stack direction="row" spacing={5} justifyContent="space-between">
                        <Avatar />
                        <span style={{ marginLeft: "8px", }}>
                            <div style={{
                                fontSize: "15px",
                                fontWeight: "600",
                            }}>
                                {init ? writer.name : "username"}
                            </div>
                            <div style={{
                                fontSize: "13px",
                                lineHeight: "1.46",
                            }}>
                                {init ? writer.address : "address"}
                            </div>
                        </span>
                        {loginmy ? <div>
                            <button style={BtnStyle} onClick={openEditModal}>수정하기</button>
                            <Modal
                                open={editModalOpen}
                                onClose={closeEditModal}
                            >
                                <Box sx={style}>
                                    <EditModal id={postID} photoURL={value.photoURL} title={value.title} price={value.price} content={value.content} close={closeEditModal} />
                                </Box>
                            </Modal>
                            <button style={BtnStyle} onClick={openDeleteModal}>삭제하기</button>
                            <Modal
                                open={deleteModalOpen}
                                onClose={closeDeleteModal}
                            >
                                <Box sx={style}>
                                    <DeleteModal />
                                    <br />
                                    <button style={delBtn} onClick={del}>
                                        확인
                                    </button>
                                    <button style={delBtn} onClick={closeDeleteModal}>
                                        취소
                                    </button>
                                </Box>
                            </Modal> </div> : <></>}
                        <div style={{
                            float: "right",
                        }}>
                            <Box sx={{
                                float: "right",
                                fontSize: "15px",
                                fontWeight: "600",
                                color: { color },
                            }}>
                                {init ? writer.temperature : 36.5} °C
                            </Box>
                            <br />
                            <ThemeProvider theme={theme}>
                                <Slider color='good' sx={{
                                    width: "150px",
                                    '& .MuiSlider-thumb': {
                                        boxShadow: "none",
                                        width: "0px",
                                        height: "0px",
                                    },
                                    '.MuiSlider-track': {
                                        color: { color },
                                    },
                                    '.MuiSlider-rail': {
                                        color: '#A9A9A9',
                                    },
                                }} max={75} valueLabelDisplay="off" value={init ? writer.temperature : 36.5} />
                            </ThemeProvider>
                        </div>
                        <div>
                            <Avatar alt="img" src={img} />
                            <div style={{
                                float: "right",
                                fontSize: "8px",
                                fontWeight: "600",
                                color: "grey",
                                marginRight: "2px",
                            }}>
                                매너온도
                            </div>
                        </div>

                    </Stack>
                </div>
                <hr />
                <div>
                    <Box sx={{ fontSize: 20, fontWeight: '600', lineHeight: '1.5', marginTop: "20px" }}>{value.title}</Box>
                    <Box sx={{ fontSize: 13, color: "#868e96", lineHeight: '1.46', marginTop: "4px" }}>{value.created_at}</Box>
                    <Box sx={{ fontSize: 18, fontWeight: 'bold', lineHeight: '1.76', letterSpacing: '-0.6px', marginTop: "4px" }}>{value.price}원</Box>
                    <Box sx={{ fontSize: 17, fontWeight: 'regular', lineHeight: '1.6', letterSpacing: '-0.6px', marginTop: "4px", wordBreak: 'all-break' }}>{value.content}</Box>
                    <Box sx={{ color: "#868e96", fontSize: "13px", lineHeight: '1.76', letterSpacing: '-0.6px', marginTop: "4px" }}>조회: {value.viewCnt}</Box>

                </div >
                <Stack direction="row" justifyContent="flex-end">
                    {loginchat ? <div>
                        <button style={staticBtnStyle} onClick={onChat}>
                            채팅하기
                        </button>
                    </div> : <div></div>}
                    {loginlift ? <div>
                        <button style={staticBtnStyle} onClick={lift}>
                            끌올하기
                        </button>
                    </div> : <div></div>}
                </Stack>
            </div >
        </div >
    );
};
export default PostDetail;
