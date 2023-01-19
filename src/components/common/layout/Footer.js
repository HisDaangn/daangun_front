import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "15px",
            fontWeight: "700",
            textDecoration: "underline",
          }}
        >
          중고거래 인기검색어
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "0 auto",
            paddingx: "50px",
            marginBottom: "50px",
            cursor: "pointer",
          }}
        >
          <span>자전거</span>
          <span>의자</span>
          <span>아이폰</span>
          <span>냉장고</span>
          <span>노트북</span>
          <span>패딩</span>
          <span>아이패드</span>
          <span>모니터</span>
          <span>스타벅스</span>
          <span>책상</span>
        </Box>
      </Box>
      <hr style={{ opacity: "20%" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          marginLeft: "100px",
        }}
      >
        <Box sx={{ marginRight: "50px" }}>
          <table
            style={{
              borderSpacing: "40px",
              fontSize: "14px",
            }}
          >
            <tr>
              <td>중고거래</td>
              <td>당근비즈니스</td>
              <td>자주 묻는 질문</td>
            </tr>
            <tr>
              <td>동네가게</td>
              <td>채팅하기</td>
              <td>회사 소개</td>
            </tr>
            <tr>
              <td colSpan="2">당근알바</td>
              <td>인재 채용</td>
            </tr>
            <tr>
              <td>부동산 직거래</td>
            </tr>
            <tr>
              <td>중고차 직거래</td>
            </tr>
          </table>
        </Box>
        <Box
          sx={{
            marginRight: "130px",
            marginTop: "25px",
            width: "312px",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "14.5px",
              marginBottom: "5px",
            }}
          >
            당근마켓 앱 다운로드
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#eaebee",
                width: "145px",
                paddingx: "10px",
                paddingY: "8px",
                borderRadius: "9px",
              }}
            >
              <AppleIcon sx={{ color: "black", marginRight: "3px" }} />
              <span
                style={{
                  textTransform: "capitalize",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                App Store
              </span>
            </Button>
            <Button
              sx={{
                backgroundColor: "#eaebee",
                width: "145px",
                paddingx: "10px",
                paddingY: "8px",
                borderRadius: "9px",
              }}
            >
              <GoogleIcon sx={{ color: "black", marginRight: "3px" }} />
              <span
                style={{
                  textTransform: "capitalize",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Google Play
              </span>
            </Button>
          </div>
        </Box>
      </Box>
      <hr style={{ opacity: "20%", width: "55%" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "750px",
            marginTop: "18px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ fontSize: "13px", color: "gray" }}>
              <div>
                <span style={{ fontWeight: "900" }}>대표</span> 1팀 |
                <span style={{ fontWeight: "900" }}> 사업자번호 </span>
                375-87-00088
              </div>
              <div>
                <span style={{ fontWeight: "900" }}>
                  직업정보제공사업 신고번호
                </span>{" "}
                2016-포항북구-0051
              </div>
              <div>
                <span style={{ fontWeight: "900" }}>주소</span> 포항시 북구
                흥해읍 한동로 558, NTH 어딘가 (당근서비스)
              </div>
              <div>
                <span style={{ fontWeight: "900" }}>전화</span> 1544-9796 |
                <span style={{ fontWeight: "900" }}> 고객문의</span>{" "}
                cs@handong.com
              </div>
            </Box>
            <div
              style={{
                width: "140px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FacebookIcon sx={{ fontSize: "26px", color: "gray" }} />
              <InstagramIcon sx={{ fontSize: "26px", color: "gray" }} />
              <YouTubeIcon sx={{ fontSize: "26px", color: "gray" }} />
              <LinkedInIcon sx={{ fontSize: "26px", color: "gray" }} />
            </div>
          </Box>
          <div
            style={{
              fontSize: "13px",
              color: "gray",
              fontWeight: "700",
              width: "220px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <div>제휴 문의</div>
            <div>광고 문의</div>
            <div>PR 문의</div>
            <div>IR 문의</div>
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "gray",
              fontWeight: "700",
              width: "420px",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              marginBottom: "130px",
            }}
          >
            <div>이용약관</div>
            <div style={{ color: "black" }}>개인정보처리방침</div>
            <div>위치기반서비스 이용약관</div>
            <div>이용자보호 비전과 계획</div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
