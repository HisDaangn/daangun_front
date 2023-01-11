import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

function Home() {
	return (
		// 리팩토링과 컴포넌트화 필요함. 향후 수정 필요.
		// 전체 컨테이너
		<>
			{/* 첫번째 섹션 */}
			<Box sx={{ backgroundColor: "#FBF7F2" }}>
				<Box
					position={"relative"}
					sx={{
						height: "760px",
						width: "1024px",
						padding: 0,
						margin: "0 auto",
					}}
				>
					<Container>
						<Grid container>
							<Grid item xs={5}>
								<Typography
									variant="h2"
									paddingTop={"18rem"}
									fontWeight={"700"}
									lineHeight={"1.3"}
									marginBottom={"2.7rem"}
								>
									당신 근처의
									<br />
									당근마켓
								</Typography>
								<Typography variant="body1" lineHeight={"1.5"}>
									중고 거래부터 동네 정보까지, 이웃과 함께해요.
									<br />
									가깝고 따뜻한 당신의 근처를 만들어요.
								</Typography>
							</Grid>
							<Grid item xs={5}>
								<Box
									component={"img"}
									src={"img/daangn1.webp"}
									position={"absolute"}
									width={"804px"}
									height={"685px"}
									bottom={0}
								/>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
			{/* // 두번째 섹션 */}
			<Box sx={{ backgroundColor: "white" }} padding={"6rem 0"}>
				<Box
					position={"relative"}
					sx={{
						width: "1024px",
						padding: 0,
						margin: "0 auto",
						alignItems: "center",
					}}
				>
					<Container>
						<Grid container>
							<Grid item xs={7.6}>
								<Box
									component={"img"}
									src={"img/daangn2.webp"}
									width={"532px"}
									height={"684px"}
								/>
							</Grid>
							<Grid item xs={4.4}>
								<Typography
									variant="h3"
									paddingTop={"15rem"}
									fontWeight={"700"}
									lineHeight={"1.3"}
									marginBottom={"1.8rem"}
								>
									우리 동네
									<br />
									중고 직거래 마켓
								</Typography>
								<Typography variant="body1">
									동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
								</Typography>
								<Box marginTop={"2.5rem"}>
									<Link to={"/viewpost"} style={{ textDecoration: "none" }}>
										<Button
											variant="contained"
											size={"large"}
											sx={{ fontWeight: "bold" }}
											style={{ backgroundColor: "#F1F3F5", color: "black" }}
										>
											인기매물 보기
										</Button>
									</Link>
									<Link to={"/tradeboard"} style={{ textDecoration: "none" }}>
										<Button
											variant="contained"
											sx={{ marginLeft: "1.6rem", fontWeight: "bold" }}
											size={"large"}
											style={{ backgroundColor: "#F1F3F5", color: "black" }}
										>
											믿을 수 있는 중고거래
										</Button>
									</Link>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
			{/* 3번째 섹션 */}
			<Box sx={{ backgroundColor: "#E6F3E6" }} padding={"6rem 0"}>
				<Box
					position={"relative"}
					sx={{
						width: "1024px",
						padding: 0,
						margin: "0 auto",
						alignItems: "center",
					}}
				>
					<Container>
						<Grid container>
							<Grid item xs={6}>
								<Typography
									variant="h3"
									paddingTop={"15rem"}
									fontWeight={"700"}
									lineHeight={"1.3"}
									marginBottom={"1.8rem"}
								>
									이웃과 소통 하는
									<br />
									동네생활
								</Typography>
								<Typography variant="body1">
									우리 동네의 이웃과 실시간 소통해요.
								</Typography>
								<Box marginTop={"2.5rem"}>
									<Link to={"/chat"} style={{ textDecoration: "none" }}>
										<Button
											variant="contained"
											size={"large"}
											sx={{ fontWeight: "bold", width: "200px" }}
											style={{ backgroundColor: "#F1F3F5", color: "black" }}
											ico
										>
											채팅하러 가기
										</Button>
									</Link>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box
									component={"img"}
									src={"img/daangn3.webp"}
									width={"532px"}
									height={"684px"}
								/>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
			{/* // 네번째 섹션 */}
			<Box sx={{ backgroundColor: "white" }} padding={"6rem 0"}>
				<Box
					position={"relative"}
					sx={{
						width: "1024px",
						padding: 0,
						margin: "0 auto",
						alignItems: "center",
					}}
				>
					<Container>
						<Grid container>
							<Grid item xs={8}>
								<Box
									component={"img"}
									src={"img/daangn4.webp"}
									width={"532px"}
									height={"684px"}
								/>
							</Grid>
							<Grid item xs={4}>
								<Typography
									variant="h3"
									paddingTop={"18rem"}
									fontWeight={"700"}
									lineHeight={"1.3"}
									marginBottom={"1.8rem"}
								>
									내 근처에서 찾는
									<br />
									동네가게
								</Typography>
								<Typography variant="body1">
									우리 동네 가게를 찾고 있나요?
									<br />
									동네 주민이 남긴 진짜 후기를 확인해보세요!
								</Typography>
								<Box marginTop={"2.5rem"}>
									<Button
										variant="contained"
										size={"large"}
										sx={{ fontWeight: "bold", width: "200px" }}
										style={{ backgroundColor: "#F1F3F5", color: "black" }}
										ico
									>
										당근마켓 동네가게 찾기
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
		</>
	);
}
export default Home;
