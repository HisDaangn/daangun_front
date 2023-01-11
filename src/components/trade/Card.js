import React from 'react'
import  './Cards.css';
import { Link } from 'react-router-dom';

function Card(Items) {

    return (
        <div className="cards__item">
      <img className="card-img" src={ Items.imgs } />
      <div className="card-desc">
        <h2 className="card-title">{ Items.title }</h2>
        <div className="card-price">{ Items.price }</div>
        <div className="card-content">
          <span>{Items.interest}</span> ∙ <span>{Items.chatting}</span>
        
        </div>
      </div>
      
    </div>
        );
}

export default Card;