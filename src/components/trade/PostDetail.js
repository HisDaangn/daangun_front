import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditModal from '../../pages/trade/EditPost';
import {
    Avatar,
    Box,
    Slider,
    Button,
    Grid,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
    const BtnStyle = {
        backgroundColor: "white",
        borderRadius: "3px",
        fontWeight: "bold",
        fontSize: "10px",
        width: "80px",
        height: "30px",
        marginLeft: "10px",
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Button startIcon={<ArrowBackIosIcon />}></Button>
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 400,
                    }}
                    alt="The house from the offer."
                    src="https://img.danawa.com/prod_img/500000/489/206/img/10206489_1.jpg?shrink=330:330&_v=20200714161025"
                />
                <Button startIcon={<ArrowForwardIosIcon />}></Button>
            </Grid>
            <Box>
                <Grid container spacing={3}>
                    <Avatar src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
                    <Box sx={{ fontSize: 16, fontWeight: 'regiar' }}>username <br /> 포항시 흥해읍</Box>
                    <Grid item xs={7}>
                        <button style={BtnStyle} onClick={openEditModal}>수정하기</button>
                        <EditModal open={editModalOpen} close={closeEditModal}></EditModal>
                        <button style={BtnStyle} onClick={openDeleteModal}>삭제하기</button>
                        <DeleteModal open={deleteModalOpen} close={closeDeleteModal} header="Modal heading">
                            게시물이 삭제됩니다!
                        </DeleteModal>
                    </Grid>
                    <Grid>
                        <Slider width={100} defaultValue={36.5} aria-label="Default" valueLabelDisplay="auto" />
                        <Avatar src="https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png" />
                    </Grid>
                </Grid>

            </Box>
            <hr />
            <div>
                <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>라면 사실 분~</Box>
                <Box sx={{ fontSize: 16, fontWeight: 'bold', m: 1 }}>1,500원</Box>
                <Box sx={{ fontSize: 16, fontWeight: 'regular', m: 1 }}>새벽이라서 팔아봅니다~</Box>
            </div>
        </Box>
    )
}
export default PostDetail;