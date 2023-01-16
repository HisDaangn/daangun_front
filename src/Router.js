import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import WebSocketTest from "./pages/WebSocket";
import { Box } from "@mui/material";
import Chat from "./pages/chat/Chat";
import AddPost from "./pages/trade/AddPost";
import EditPost from "./pages/trade/EditPost";
import TradeBoard from "./pages/trade/TradeBoard";
import ViewPost from "./pages/trade/ViewPost";
import { drawerWidth } from "./constants/commons";
import Header from "./components/common/layout/Header";
import Mypage from "./components/user/Mypage";

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Box display="flex">
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 0,
						pt: 5,
						pb: 0,
						height: "100vh",
						width: `calc(100% - ${drawerWidth}px)`,
					}}
				>
					<Routes>
						<>
							<Route path="/" element={<Navigate to="/home" />} />
							<Route path="/home" element={<Home />} />
							<Route path="/chat/room/:id" element={<Chat />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/addpost" element={<AddPost />} />
							<Route path="/editpost" element={<EditPost />} />
							<Route path="/post/:postID" element={<TradeBoard />} />
							<Route path="/post" element={<ViewPost />} />
							<Route path="/mypage" element={<Mypage />} />
							<Route path="/websockettest" element={<WebSocketTest />} />
						</>
					</Routes>
				</Box>
			</Box>
		</BrowserRouter>
	);
}

export default Router;
