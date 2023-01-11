import React from "react";
import Card from "../../components/trade/Card";
import './Cards.css';

function CardList(Items){
    return (
        <div className="cards__container">
                <div className="cards__wrapper">   
                    <ul className='cards__items'>
                        <Card 
                        imgs={Items.imgs}
                        title={Items.title}
                        price={Items.price}
                        interest={Items.interest}
                        chatting={Items.chatting}
                        />
                    </ul>    
                </div>
            </div>            
    );
}

export default CardList;