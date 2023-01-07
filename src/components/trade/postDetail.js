import { useState } from "react";
import {
    Avatar,
    Box,
    Slider,
    Button,
    Grid,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Modal from "../../pages/trade/DeleteModal";
const postDetail = (props) => {
    const onEdit = EditBtn => {
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
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box >
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
            </Box>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
                        <Box sx={{ fontSize: 16, fontWeight: 'regi;ar' }}>나는유저</Box>
                    </Grid>
                    <Grid item xs={7}>
                        <button style={BtnStyle} onClick={onEdit}>수정하기</button>
                        <button style={BtnStyle} >삭제하기</button>
                        {/* <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal> */}
                    </Grid>
                    <Grid item xs>
                        <Box width={100}>
                            <Slider defaultValue={36.5} aria-label="Default" valueLabelDisplay="auto" />
                            <Avatar src="https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png" />
                        </Box>
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
export default postDetail;