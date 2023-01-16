import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Avatar, Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";

const clientId =
  "163308438198-73f01cdp6rr2ivoeil8ri35nh87a5jfg.apps.googleusercontent.com";

function GoogleButton() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  const onSuccess = (res) => {
    console.log("Login Success :", res);
    const userId = res.wt.cu;
    console.log("id: ", res.wt.cu);
    if (userId === "22001024@handong.ac.kr") {
      alert("환영합니다"); // 임시
    } else {
      if (window.confirm("회원 등록이 필요합니다. 회원가입 하시겠습니까?")) {
        setOpen("true");
      } else {
        alert("회원가입을 취소하셨습니다.");
      }
    }
  };
  const onFailure = (res) => {
    console.log("Login Failed : ", res);
  };

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
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
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
                id="outlined-basic"
                label="별명을 입력해주세요"
                variant="outlined"
                style={{ width: "100%", margin: "10px auto" }}
              />
              <TextField
                id="outlined-basic"
                label="사는 지역을 입력해주세요"
                variant="outlined"
                style={{ width: "100%", margin: "10px auto" }}
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
            >
              완료
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default GoogleButton;
