
import React from "react";

// 샘플 데이터
const sampleFriends = [
  { id: 1, nickname: 'nickname', status: '상태 메시지' },
  { id: 2, nickname: 'nickname', status: '상태 메시지' },
  { id: 3, nickname: 'nickname', status: '상태 메시지' },
  { id: 4, nickname: 'nickname', status: '상태 메시지' },
];

const sampleRequests = [
  { id: 1, nickname: 'requester_1', date: '1일 전' },
  { id: 2, nickname: 'requester_2', date: '3일 전' },
];

const FriendList = ({ friends = sampleFriends, requests = sampleRequests, onAccept, onReject, onChat, onDelete }) => {
  return (
    <div style={{ width: 340, background: '#fff', borderRight: '1px solid #eee', height: '100vh', overflowY: 'auto' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <h2 style={{ margin: 0, fontSize: 22 }}>친구</h2>
      </div>
      {/* 친구 요청 */}
      <div style={{ padding: '1rem 1rem 0.5rem 1rem', borderBottom: '1px solid #f4f4f4' }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>친구 요청</div>
        {requests.length === 0 ? (
          <div style={{ color: '#aaa', fontSize: 14 }}>요청 없음</div>
        ) : (
          requests.map(r => (
            <div key={r.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <span style={{ fontWeight: 500 }}>{r.nickname}</span>
                <span style={{ color: '#888', fontSize: 12, marginLeft: 8 }}>{r.date}</span>
              </div>
              <div>
                <button onClick={() => onAccept && onAccept(r.id)} style={{ marginRight: 4, border: '1px solid #bbb', borderRadius: 6, background: '#fff', padding: '2px 10px', cursor: 'pointer' }}>수락</button>
                <button onClick={() => onReject && onReject(r.id)} style={{ border: '1px solid #bbb', borderRadius: 6, background: '#fff', padding: '2px 10px', cursor: 'pointer' }}>거절</button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* 친구 목록 */}
      <div style={{ padding: '1rem' }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>친구 {friends.length}</div>
        {friends.map(f => (
          <div key={f.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f4f4f4' }}>
            <div>
              <span style={{ fontWeight: 500, fontSize: 16 }}>👤 {f.nickname}</span>
              <div style={{ color: '#888', fontSize: 13 }}>{f.status}</div>
            </div>
            <div style={{ position: 'relative' }}>
              {/* 더보기 메뉴 (임시) */}
              <button onClick={() => onChat && onChat(f.id)} style={{ border: 'none', background: '#eee', borderRadius: 6, marginRight: 4, cursor: 'pointer', padding: '4px 8px' }}>채팅</button>
              <button onClick={() => onDelete && onDelete(f.id)} style={{ border: 'none', background: '#eee', borderRadius: 6, cursor: 'pointer', padding: '4px 8px' }}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
