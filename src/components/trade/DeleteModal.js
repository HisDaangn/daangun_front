import React from 'react';
import axios from 'axios';

import "./DeleteModal.css";
const DeleteModal = (props) => {
    // const { postID } = useParams();
    const postID = 2;
    async function deleteData() {
        try {
            //응답 성공
            const response = await axios.delete(`http://localhost:8080/trade/${postID}`);
            console.log(response);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="close" onClick={close}>
                            닫기
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};
export default DeleteModal;