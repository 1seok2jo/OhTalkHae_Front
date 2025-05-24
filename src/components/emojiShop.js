
import React from "react";

// 샘플 이모티콘 데이터
const sampleEmojis = [
  {
    id: 1,
    name: '이모티콘 이름',
    uploader: '업로더 이름',
    price: 2000,
    icons: ['🐶', '🐶', '🐶', '🍖', '🦴'],
  },
  {
    id: 2,
    name: '이모티콘 이름',
    uploader: '업로더 이름',
    price: 2000,
    icons: ['🐱', '🐱', '🐱', '🐟', '🦴'],
  },
];

const EmojiShop = ({ emojis = sampleEmojis, onBuy, selectedId, onSelect, filter, onFilter }) => {
  const filters = ['인기순', '최신순', '좋아요', '구매'];
  const selectedEmoji = emojis.find(e => e.id === selectedId) || emojis[0];

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#fff' }}>
      {/* 좌측 목록 */}
      <div style={{ width: 340, borderRight: '1px solid #eee', padding: '1rem 0' }}>
        <div style={{ display: 'flex', gap: 8, padding: '0 1rem 1rem 1rem' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => onFilter && onFilter(f)}
              style={{
                border: '1px solid #bbb',
                background: filter === f ? '#e0e0e0' : '#fff',
                borderRadius: 8,
                padding: '4px 12px',
                cursor: 'pointer',
                fontWeight: filter === f ? 700 : 400,
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {emojis.map((e, idx) => (
            <li
              key={e.id}
              onClick={() => onSelect && onSelect(e.id)}
              style={{
                background: selectedId === e.id ? '#f4f4f4' : 'transparent',
                padding: '12px 1rem',
                cursor: 'pointer',
                borderBottom: '1px solid #f4f4f4',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 24 }}>{e.icons[0]}</span>
              <div>
                <div style={{ fontWeight: 500 }}>{idx + 1} {e.name}</div>
                <div style={{ color: '#888', fontSize: 13 }}>{e.uploader}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* 우측 상세 */}
      <div style={{ flex: 1, padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 40 }}>{selectedEmoji.icons[0]}</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 20 }}>{selectedEmoji.name}</div>
            <div style={{ color: '#888', fontSize: 14 }}>{selectedEmoji.uploader}</div>
            <div style={{ marginTop: 8, fontWeight: 500 }}>{selectedEmoji.price.toLocaleString()} pt</div>
            <button
              onClick={() => onBuy && onBuy(selectedEmoji.id)}
              style={{ marginTop: 8, background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 18px', cursor: 'pointer', fontWeight: 600 }}
            >
              구매
            </button>
          </div>
        </div>
        <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {selectedEmoji.icons.map((icon, i) => (
            <span key={i} style={{ fontSize: 40 }}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiShop;
