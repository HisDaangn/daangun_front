import React, { useState, useEffect } from 'react';
import './Cards.css';
import Btn from "../../components/common/layout/Btn";
import AddPost from "../../pages/trade/AddPost";
import {
    Avatar,
    Box,
    Slider,
    Stack,
    createTheme,
    ThemeProvider,
    Modal,
} from "@mui/material";
import { PropaneSharp } from '@mui/icons-material';
function PostList() {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [photoURL, setPhotoURL] = useState("www.google.com");
    const [content, setContent] = useState();

    const [addModalOpen, setAddModalOpen] = useState(false);

    const openAddModal = () => {
        setAddModalOpen(true);
    };
    const closeAddModal = () => {
        setAddModalOpen(false);
    };
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
    const BtnStyle = {
        border: "1px solid #d1d3d8",
        padding: "5px 15px",
        color: "#212124",
        fontWeight: "bolder",
        fontSize: "16px",
    };
    return (
        <div className="margin-bottom">
            <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
            중고거래 인기매물
        </h1>
        <p>
            <Box style={{ textDecoration: "none" , float: "right" }}>
            <button style={BtnStyle} onClick={openAddModal}>추가하기</button>
                <Modal
                    open={addModalOpen}
                    onClose={closeAddModal}
                        >
                            <Box sx={style}>
                                <AddPost
                                    onclose = {closeAddModal}
                                // photoURL = {value.photoURL}
                                // title = {value.title}
                                // price = {value.price}
                                // content = {value.content} 
                                />
                            </Box>
                        </Modal>
            </Box>
        </p>
        </div>
    );
}
export default PostList;