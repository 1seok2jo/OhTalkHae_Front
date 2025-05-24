
import React, { useState } from "react";
import ChatRoomList from "../../components/ChatRoomList";
import ChatRoom from "../../components/chatRoom";
import Topbar from "../../components/topbar";

const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState(1);
  const [input, setInput] = useState("");
  // 실제 데이터는 props로 내려받거나 context, redux 등에서 관리

  // 샘플 rooms/messages는 컴포넌트 내부에 있음

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ChatRoomList selectedId={selectedRoomId} onSelect={setSelectedRoomId} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar title="채팅방" />
        <div style={{ flex: 1 }}>
          <ChatRoom
            input={input}
            setInput={setInput}
            // onSend, onInvite, onLeave 등은 실제 구현에서 연결
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
