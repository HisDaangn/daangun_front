import React, { useState, useEffect } from 'react';
import './Cards.css';
import { theme } from "../../theme/theme";
import AddModal from '../../pages/trade/AddPost';

function PostList() {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const openAddModal = () => {
        setAddModalOpen(true);
    };
    const closeAddModal = () => {
        setAddModalOpen(false);
    };
    const BtnStyle = {
        border: "1px solid #d1d3d8",
        padding: "5px 15px",
        color: "#212124",
        fontWeight: "bolder",
        fontSize: "16px",
        textDecoration: "none",
        float: "right",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }
    return (
        <div className="margin-bottom">
            <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
                중고거래 인기매물
            </h1>
            <p>
                <button style={BtnStyle} onClick={openAddModal}>추가하기</button>
                <AddModal open={addModalOpen} close={closeAddModal}></AddModal>
            </p>
        </div>
    );
}
export default PostList;