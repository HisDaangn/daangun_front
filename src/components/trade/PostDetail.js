import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditModal from '../../pages/trade/EditPost';
import { Link } from "react-router-dom";
import {
    Avatar,
    Box,
    Slider,
    Stack,
} from "@mui/material";
const PostDetail = (props) => {
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
                // background: "black",
            }}>
                <img style={{
                    width: "100%",
                    height: "400px",
                }} src="https://img.danawa.com/prod_img/500000/489/206/img/10206489_1.jpg?shrink=330:330&_v=20200714161025" alt='img' />

                <div >
                    <Stack direction="row" spacing={5} justifyContent="center">

                        <Avatar src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
                        <Box sx={{ fontSize: 16, fontWeight: 'regiar' }}>username <br /> 포항시 흥해읍</Box>
                        <button style={BtnStyle} onClick={openEditModal}>수정하기</button>
                        <EditModal open={editModalOpen} close={closeEditModal}></EditModal>
                        <button style={BtnStyle} onClick={openDeleteModal}>삭제하기</button>
                        <DeleteModal open={deleteModalOpen} close={closeDeleteModal} header="Modal heading">
                            게시물이 삭제됩니다!
                        </DeleteModal>
                        <Slider disabled sx={{ width: "150px" }} defaultValue={36.5} aria-label="Default" valueLabelDisplay="auto" />
                        <Avatar src="https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png" />
                    </Stack>
                </div>
                <hr />
                <div>
                    <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 2 }}>라면 사실 분~</Box>
                    <Box sx={{ fontSize: 16, fontWeight: 'bold', m: 2 }}>1,500원</Box>
                    <Box sx={{ fontSize: 16, fontWeight: 'regular', m: 2 }}>새벽이라서 팔아봅니다~</Box>
                </div>
                <Stack direction="row" justifyContent="flex-end">
                    <Link to={"/chat"} style={{ textDecoration: "none" }}>
                        <button style={staticBtnStyle} onClick={onChat}>채팅하기</button>
                    </Link>
                    <button style={staticBtnStyle} onClick={onLift}>끌올하기</button>
                </Stack>
            </div >
        </div >
    )
}
export default PostDetail;