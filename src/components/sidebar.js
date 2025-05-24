
import React from "react";

const Sidebar = ({ onNavigate, active }) => {
  // 아이콘은 임시로 이모지 사용
  const menu = [
    { key: 'friend', icon: '👤', label: '친구' },
    { key: 'chat', icon: '💬', label: '채팅방' },
    { key: 'emoji', icon: '😊', label: '이모티콘' },
    { key: 'notification', icon: '🔔', label: '알림' },
    { key: 'setting', icon: '⚙️', label: '설정' },
  ];

  return (
    <nav style={{
      width: 60,
      background: '#f4f4f4',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 20,
      borderRight: '1px solid #ddd',
    }}>
      {menu.map((item, idx) => (
        <button
          key={item.key}
          onClick={() => onNavigate && onNavigate(item.key)}
          style={{
            background: active === item.key ? '#e0e0e0' : 'transparent',
            border: 'none',
            margin: '16px 0',
            fontSize: 24,
            cursor: 'pointer',
            width: 40,
            height: 40,
            borderRadius: 10,
            outline: 'none',
          }}
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
