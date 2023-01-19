import React from "react";
import PostList from "../../components/trade/PostList";
import CardList from "../../components/trade/CardList";


function ViewPost() {

  

  return (
    <div>
        <PostList />
        <div>
							<CardList
                    // imgs={Items.imgs}
                    // title={Items.title}
                    // price={Items.price}
                    // interest={Items.interest}
                    // chatting={Items.chatting}
                    />
        </div>
    </div>
  );
}
export default ViewPost;
