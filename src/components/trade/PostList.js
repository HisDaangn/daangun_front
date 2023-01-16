import { Link } from "react-router-dom";
import './Cards.css';
import Btn from "../../components/common/layout/Btn";

function PostList(){
    return(
        <div className="margin-bottom">
            <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
            중고거래 인기매물
        </h1>
        <p>
            <Link to="/addpost" style={{ textDecoration: "none" , float: "right" }}>
            <Btn>
                추가하기
                </Btn>
            </Link>
        </p>
        </div>
    );
}
export default PostList;