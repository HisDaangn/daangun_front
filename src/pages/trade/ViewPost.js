import React from "react";
import PostList from "../../components/trade/PostList";
import Post from "../../components/trade/Post";
import CardList from "../../components/trade/CardList";

function ViewPost() {
  const [Items, setItems] = React.useState([]);
  const ItemLists = Post;

  return (
    <div>
      <PostList />

      <div
        style={{
          margin: "50px",
          padding: "50px",
          width: "480px",
          display: "grid",
          gridTemplateRows: "1fr ",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          backgroundColor: "white",
        }}
      >
        {ItemLists.map((Items, id) => (
          <div key={id}>
            <CardList
              imgs={Items.imgs}
              title={Items.title}
              price={Items.price}
              interest={Items.interest}
              chatting={Items.chatting}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ViewPost;
