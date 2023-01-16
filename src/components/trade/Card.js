import React, { useEffect, useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Card(Items) {
	const [chatCount, setChatCount] = useState(0);
	useEffect(function async() {
		getCount();
	}, []);

	// GET
	async function getCount() {
		try {
			var postId = 3;
			const response = await axios.get(`http://localhost:8080/chat/${postId}`);

			console.log(response);
			setChatCount(response.data);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<Link to="/tradeboard" className="card-link">
			<div className="card-top">
				<img className="card-img" src={Items.imgs} />
				<div className="card-desc">
					<h2 className="card-title">{Items.title}</h2>
					<div className="card-price">{Items.price}</div>
					<div className="card-content">
						<span>{Items.interest}</span> ∙ <span>채팅 {chatCount}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;
