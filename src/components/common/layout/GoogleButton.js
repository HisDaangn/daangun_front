import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { useEffect, useState } from "react";
import { Avatar, Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import jwtDecode from "jwt-decode";
const clientId =
  "122497781005-52p7dqhbjak9fp8o4akg033jl78tjk4a.apps.googleusercontent.com";

let localstorage = window.localStorage;

function GoogleButton() {
  // 스타일
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "600px",
    height: "50%",
    bgcolor: "white",
    boxShadow: 24,
  };
  // 구글 버튼 관련 함수
  const onSuccess = async (res) => {
    let userObject = jwtDecode(res.credential);

    const GIDfromUser = userObject.sub;
    const db = await getUser(GIDfromUser);
    const GIDfromDB = db.googleId;

    localstorage.setItem("sessionInfo", JSON.stringify(db));

    if (GIDfromDB === undefined) {
      let youWant = window.confirm("회원정보가 없음. 회원가입 하실?");
      if (youWant) {
        //회원가입 모달창 띄우기
        setOpen(true);
        await setExtra({ sub: userObject.sub, email: userObject.email });
      } else {
        alert("회원가입을 안하다니");
        window.history.go(0);
      }
    } else {
      alert("회원이시네용");
      window.location.reload();
    }
  };

  const onFailure = (res) => {
    console.log("Login Failed : ", res);
  };

  // 추가 정보 입력
  const onChangeValue = (e) => {
    setExtra({
      ...extra,
      [e.target.name]: e.target.value,
    });
    console.log(extra);
  };

  const [extra, setExtra] = useState({
    email: "",
    extraName: "",
    sub: "",
    extraAddress: "",
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} id="modal-modal-title">
            <Box
              sx={{
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "60%",
              }}
            >
              <Avatar
                sx={{ width: "140px", height: "140px", marginBottom: "30px" }}
              ></Avatar>
              <TextField
                name="extraName"
                label="별명을 입력해주세요"
                variant="outlined"
                style={{ width: "100%", margin: "10px auto" }}
                onChange={onChangeValue}
              />
              <TextField
                name="extraAddress"
                label="사는 지역을 입력해주세요"
                variant="outlined"
                style={{ width: "100%", margin: "10px auto" }}
                onChange={onChangeValue}
              />
            </Box>

            <Button
              sx={{
                backgroundColor: "#ff6f0f",
                width: "100%",
                borderRadius: "0px",
                color: "white",
                fontWeight: "700",
                fontSize: "18px",
                position: "fixed",
                bottom: "0px",
                "&:hover": {
                  backgroundColor: "#ff6f0f",
                },
              }}
              onClick={() => {
                console.log(extra);
                signup(
                  extra.email,
                  extra.extraName,
                  36.5,
                  extra.sub,
                  extra.extraAddress
                );
                setOpen(false);
                alert("회원가입 완료! 다시 로그인해주세요");
                localstorage.removeItem("sessionInfo");
                window.location.reload();
              }}
            >
              완료
            </Button>
          </Box>
        </Modal>
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleButton;

export const signup = async (
  e_address,
  name,
  temperature,
  googleId,
  address
) => {
  await axios.post(`http://localhost:8080/user/signup/`, {
    e_address: e_address,
    name: name,
    temperature: `36.5`,
    googleId: googleId,
    address: address,
  });
};

export const getUser = async (googleId) => {
  const response = await axios.get(
    `http://localhost:8080/user/getUser/${googleId}`
  );
  console.log(response.data);
  return response.data;
};
