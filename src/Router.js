import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import WebSocketTest from './pages/WebSocket';

import Chat from './pages/chat/Chat';
import AddPost from './pages/trade/AddPost';
import EditPost from './pages/trade/EditPost';
import TradeBoard from './pages/trade/TradeBoard';
import ViewPost from './pages/trade/ViewPost';

function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Router;
