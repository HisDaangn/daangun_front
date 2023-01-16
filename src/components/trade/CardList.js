import React, { useEffect } from "react";
import Card from "../../components/trade/Card";
import './Cards.css';
import axios from 'axios';
import Post from "../../components/trade/Post";
import { useLoaderData } from "react-router-dom";
import { findByDisplayValue } from "@testing-library/react";


function CardList(){

    const [Items, setItems] = React.useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        // Items(id).then(function (data){
        //     setItems(data);
        // });
        const response = await axios.get(`http://localhost:8080/trade/all`);
        console.log(response);
        setItems(response.data);
    };

    

    return (
                <div className="card-wrap">
                {Items.map((Item) => (
                
				    <Card 
                    key = { Item.id } 
                    
                    post = {Item}
                    // imgs={ Item.photoURL }
                    // title={ Item.title }
                    // price={ Item.price }
                    // interest={ Item.viewCnt }
                    // // chatting={ Item.chatCnt }
                    />
			    ))}
                </div> 
    );
}

export default CardList;