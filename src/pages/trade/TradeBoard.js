import { useState } from "react";
import Modal from './DeleteModal';
import Post from "../components/Post";
// import Header from ' ../../components/common/layout/Header'
const TradeBoard = () => {
  // 이게 상세보기겠죠...? 
  const [modalOpen, setModalOpen] = useState(false);

  const onEdit = EditBtn => {
    console.log("liftBtn click !");
  }
  const onChat = chatBtn => {
    console.log("chatBtn click !");
  }
  const onLift = liftBtn => {
    console.log("liftBtn click !");
  }
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const BtnStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px 25px",
    fontWeight: "bold",
    fontSize: "20px",
  }
  const staticBtnStyle = {
    color: "white",
    backgroundColor: "#ed7833",
    border: "none",
    borderRadius: "20px",
    padding: "10px 30px",
    fontWeight: "bold",
    fontSize: "20px",
  }
  return (
    <>
      <div>
        <h1>Top - nav bar</h1>
      </div>
      <div>
        <h1>Middle</h1>
        <div>
          <h1>m-top - image</h1>
          <p>image ...</p>
          {/* <img className="phoneImage" alt="img" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%2582%25AC%25EC%25A7%2584&psig=AOvVaw1FRRNOr4A9v0ua4w3pptGE&ust=1672979255491000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJj5oMPLr_wCFQAAAAAdAAAAABAE" /> */}
        </div>
        <div>
          <p>m-middle</p>
          <div>
            <p>m-middle-left - user</p>
          </div>
          <div>
            <p>m-middle-center - buttons</p>
            <button style={BtnStyle} onClick={onEdit}>수정하기</button>
            <button style={BtnStyle} onClick={openModal}>삭제하기</button>
            <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
          </div>
          <div>
            <p>m-middle-right - score</p>
          </div>
        </div>
        <div>
          <p>m-bottom-top - title</p>
        </div>
        <div>
          <p>m-bottom-middle - price</p>
        </div>
        <div>
          <p>m-bottom-bottom - contents</p>
        </div>
      </div>
      <div>
        <h1>Bottom - static button</h1>
        <button style={staticBtnStyle} onClick={onChat}>채팅하기</button>
        <button style={staticBtnStyle} onClick={onLift}>끌올하기</button>
      </div>
    </>
  );
}
export default TradeBoard;
