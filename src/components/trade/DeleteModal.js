import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box, Divider,
} from "@mui/material";
import "./DeleteModal.css";
const DeleteModal = (id) => {
    return (
        <Box>
            <Box sx={{ fontSize: 20, fontWeight: 'bold', m: 1 }}>
                게시물이 삭제됩니다!
            </Box>
            <Divider />

        </Box>

    );
};
export default DeleteModal;