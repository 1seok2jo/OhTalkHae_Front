
import React from "react";

// 샘플 채팅방 데이터
const sampleRooms = [
  { id: 1, name: 'nickname', lastMessage: '최신 메시지 내용', time: '3분 전', unread: 2, isGroup: false },
  { id: 2, name: 'nick, name, hello', lastMessage: '최신 메시지 내용', time: '1시간 전', unread: 1, isGroup: true },
  { id: 3, name: 'nick, name', lastMessage: '최신 메시지 내용', time: '3일 전', unread: 0, isGroup: true, muted: true },
  { id: 4, name: 'chat name custom', lastMessage: '최신 메시지 내용', time: '2025-04-15', unread: 0, isGroup: true, extra: 3 },
  { id: 5, name: 'nickname', lastMessage: '최신 메시지 내용', time: '2025-03-25', unread: 0, isGroup: false },
];

const ChatRoomList = ({ rooms = sampleRooms, onSelect, selectedId }) => {
  return (
    <div style={{ width: 340, background: '#fff', borderRight: '1px solid #eee', height: '100vh', overflowY: 'auto' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <h2 style={{ margin: 0, fontSize: 22 }}>채팅방</h2>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {rooms.map(room => (
          <li
            key={room.id}
            onClick={() => onSelect && onSelect(room.id)}
            style={{
              background: selectedId === room.id ? '#f4f4f4' : 'transparent',
              padding: '16px 1rem',
              borderBottom: '1px solid #f4f4f4',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 24 }}>
              {room.isGroup ? '👥' : '👤'}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 16 }}>
                {room.name}
                {room.extra && <span style={{ color: '#888', fontSize: 13, marginLeft: 6 }}>+{room.extra}</span>}
                {room.muted && <span style={{ marginLeft: 6, fontSize: 15 }}>🔕</span>}
              </div>
              <div style={{ color: '#888', fontSize: 13 }}>{room.lastMessage}</div>
            </div>
            <div style={{ textAlign: 'right', minWidth: 60 }}>
              <div style={{ fontSize: 12, color: '#888' }}>{room.time}</div>
              {room.unread > 0 && (
                <span style={{
                  display: 'inline-block',
                  background: '#ff5252',
                  color: '#fff',
                  borderRadius: 12,
                  fontSize: 13,
                  minWidth: 22,
                  padding: '2px 7px',
                  marginTop: 4,
                  textAlign: 'center',
                }}>{room.unread}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomList;
