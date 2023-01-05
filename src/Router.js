import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import WebSocketTest from './pages/WebSocket';
import { Box } from '@mui/material';
import Chat from './pages/chat/Chat';
import AddPost from './pages/trade/AddPost';
import EditPost from './pages/trade/EditPost';
import TradeBoard from './pages/trade/TradeBoard';
import ViewPost from './pages/trade/ViewPost';
import { drawerWidth } from './constants/commons';

function Router() {
  return (
    <BrowserRouter>
      <Box display="flex">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            pt: 5,
            width: `calc(100% - ${drawerWidth}px)`,
          }}
        >
          <Routes>
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/editpost" element={<EditPost />} />
              <Route path="/tradeboard" element={<TradeBoard />} />
              <Route path="/viewpost" element={<ViewPost />} />
              <Route path="/websockettest" element={<WebSocketTest />} />
            </>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default Router;
