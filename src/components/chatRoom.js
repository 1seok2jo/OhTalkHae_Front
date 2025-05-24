
import React, { useRef, useEffect } from "react";

// 샘플 메시지 데이터
const sampleMessages = [
  { id: 1, sender: 'nick', text: 'wefwefewfwefew', time: '12:40' },
  { id: 2, sender: 'name', text: 'wefwefewfwefew', time: '12:45' },
  { id: 3, sender: 'name', text: 'wefwetewtwetfew', time: '14:31' },
];

const ChatRoom = ({
  chatName = 'chat name custom',
  members = ['nick', 'name'],
  messages = sampleMessages,
  onSend,
  onInvite,
  onLeave,
  input,
  setInput,
}) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#fff' }}>
      {/* 상단 채팅방 정보 */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid #eee', padding: '0 1.5rem', height: 56,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>👥</span>
          <span style={{ fontWeight: 600, fontSize: 18 }}>{chatName}</span>
          <span style={{ color: '#888', fontSize: 15 }}>+{members.length - 1}</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onInvite} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 18 }}>친구 초대</button>
          <button onClick={onLeave} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 18 }}>채팅방 나가기</button>
        </div>
      </div>
      {/* 메시지 영역 */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 1.5rem 1rem 1.5rem', background: '#fafbfc' }}>
        {messages.map((msg, idx) => (
          <div key={msg.id} style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 18 }}>
            <div style={{ fontSize: 22, marginRight: 8 }}>👤</div>
            <div>
              <div style={{ fontWeight: 500 }}>{msg.sender}</div>
              <div style={{ background: '#fff', borderRadius: 16, padding: '8px 18px', boxShadow: '0 1px 4px #eee', display: 'inline-block', marginTop: 2 }}>
                {msg.text}
              </div>
              <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{msg.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* 입력창 */}
      <form
        onSubmit={e => {
          e.preventDefault();
          if (onSend && input) onSend(input);
        }}
        style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #eee', padding: '0.5rem 1.5rem', background: '#fff' }}
      >
        <input
          type="text"
          value={input || ''}
          onChange={e => setInput && setInput(e.target.value)}
          placeholder="Input"
          style={{ flex: 1, border: '1px solid #ddd', borderRadius: 8, padding: '8px 12px', fontSize: 16, marginRight: 8 }}
        />
        <button type="button" style={{ fontSize: 22, background: 'none', border: 'none', cursor: 'pointer', marginRight: 8 }}>😊</button>
        <button type="submit" style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>전송</button>
      </form>
    </div>
  );
};

export default ChatRoom;
