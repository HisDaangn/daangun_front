import React, { useEffect } from "react";
import Card from "../../components/trade/Card";
import './Cards.css';
import { useState } from 'react';
import axios from 'axios';

function CardList(){

    const [Items, setItems] = React.useState([]);

    const [user, setUser] = useState();

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("sessionInfo")));
    }, [])

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
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
                    />
			    ))}
                </div> 
    );
}

export default CardList;