import {BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";
import './App.css'

function App() {
  const [view, setView] = useState('friends')    // 사이드 네비 선택 상태
  const [detail, setDetail] = useState(null)     // MainContent에 전달할 아이템

  const data = {
    // 친구 요청(requests) 목록
     requests: [
      { requestId: 1, requesterName: '권재은', timeAgo: '2분 전'},
      { requestId: 2, requesterName: '재은권', timeAgo: '5분 전'},
      { requestId: 3, requesterName: '권은재', timeAgo: '10분 전'}, 
      ],
    // 실제 친구 목록
     friends:  [
      {userId: 1, userName: '권재은', statusMessage: '안녕하세요!'}
     ],
     chats:    [ /* 채팅방 목록 */ ],
     shop:     [ /* 이모티콘 목록 */ ],
     alerts:   [ /* 알림 목록 */ ],
     settings: [ /* 설정 항목 */ ],
   };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainLayout
                                      view = {view}
                                      setView = {setView}
                                      detail = {detail}
                                      setDetail = {setDetail}
                                      data = {data} />}  >
            <Route index element={ <Home /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
