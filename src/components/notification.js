
import React from "react";

// 샘플 알림 데이터
const sampleNotifications = [
  { id: 1, text: 'nickname 최신 메시지 내용', time: '3분 전' },
  { id: 2, text: 'nick, name, hello 최신 메시지 내용', time: '1시간 전' },
  { id: 3, text: 'nickname 님 생일을 축하합니다', time: '8시간 전' },
];

const Notification = ({ notifications = sampleNotifications, onClose, onRemove, onClearAll }) => {
  return (
    <div style={{
      position: 'absolute',
      left: 70,
      top: 60,
      width: 320,
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      zIndex: 100,
      padding: 16,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <button onClick={onClose} style={{ border: 'none', background: 'none', fontWeight: 'bold', cursor: 'pointer' }}>알림 끄기</button>
        <button onClick={onClearAll} style={{ border: 'none', background: 'none', fontWeight: 'bold', cursor: 'pointer' }}>모두 지우기</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {notifications.map(n => (
          <li key={n.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div>
              <div style={{ fontWeight: 500 }}>{n.text}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{n.time}</div>
            </div>
            <button onClick={() => onRemove && onRemove(n.id)} style={{ border: 'none', background: 'none', color: '#888', fontSize: 18, cursor: 'pointer' }}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
