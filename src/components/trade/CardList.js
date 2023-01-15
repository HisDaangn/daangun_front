import React from "react";
import Card from "../../components/trade/Card";
import './Cards.css';
import Post from "../../components/trade/Post";

function CardList(){

    const [Items, setItems] = React.useState([]);
    const ItemLists = Post;

    return (
                <div className="card-wrap">
                {ItemLists.map((Items, id) => (
                <React.Fragment
                key = { id }
                >
				    <Card 
                    imgs={ Items.imgs }
                    title={ Items.title }
                    price={ Items.price }
                    interest={ Items.interest }
                    chatting={ Items.chatting }
                    />
                </React.Fragment>
			    ))}
                </div> 
    );
}

export default CardList;