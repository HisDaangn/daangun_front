import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './Cards.css';

function PostList(){
    return(
        <div className="margin-bottom">
            <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
            중고거래 인기매물
        </h1>
        <p>
            <Link to="/addpost">
            <Button variant="outlined"
                    className="button-add">
                    추가하기
                </Button>{' '}
            </Link>
        </p>
        </div>
    );
}
export default PostList;