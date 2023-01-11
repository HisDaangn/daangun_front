import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function PostList(){
    return(
        <><><div></div><h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
            중고거래 인기매물
        </h1>
        </>
        <p>
            <Link to="/addpost">
            <Button variant="contained" 
                    style={{position: 'absolute', right: 0, marginRight: "100px"}}>
                    추가하기
                </Button>{' '}
            </Link>
            
        </p>
               <p>
                </p> 
        </>
    );
}
export default PostList;