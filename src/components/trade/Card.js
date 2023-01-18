import React, { useEffect, useState } from "react";
import "./Cards.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card({ post }) {
	const navigate = useNavigate();
	const [chatCount, setChatCount] = useState(0);
	useEffect(function () {
		countChatRoom();
	}, []);

	//GET 상세 게시글 조회
	async function countChatRoom() {
		try {
			//응답 성공
			const response = await axios.get(
				`http://localhost:8080/chat/count/${[post.id]}`
			);
			setChatCount(response.data);
			// console.log(response);
		} catch (error) {
			//응답 실패
			console.error(error);
		}
	}

	return (
		<Box onClick={() => navigate(`/post/${post.id}`)}>
			<div className="card-link">
				<div className="card-top">
					<img className="card-img" src="./img/bad.png" />
					<div className="card-desc">
						<h2 className="card-title">{post.title}</h2>
						<div className="card-price">{post.price}</div>
						<div className="card-content">
							<span>조회: {post.viewCnt}</span> ∙ <span>채팅: {chatCount}</span>
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
}

export default Card;
