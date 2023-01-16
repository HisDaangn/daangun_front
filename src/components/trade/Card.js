import React from 'react'
import  './Cards.css';
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Card({post}) {

  const navigate = useNavigate();

    return (
      <Box 
      onClick={( ) => navigate(`/trade/${post.id}`)}
      > 
        <div className="card-link">
        <div className="card-top">
        <img className="card-img" src= "./img/bad.png" />
        <div className="card-desc">
        <h2 className="card-title">{ post.title }</h2>
        <div className="card-price">{ post.price }</div>
        <div className="card-content">
          <span>{ post.viewCnt }</span> ∙ <span></span>
        </div>
      </div>
    </div>
  </div>
  </Box>
);
}

export default Card;
