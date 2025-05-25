// props:
//   friend: { userId, nickname, statusMessage }
//   onChat: () => void
//   onRemove: () => void
export default function FriendDetail({ friend, onChat, onRemove }) {
  if (!friend) return <div>친구를 선택해 주세요.</div>;

  return (
    <div className="friend-detail">
      <h2>{friend.nickname}</h2>
      <p>{friend.statusMessage}</p>
      <button onClick={onChat}>채팅</button>
      <button onClick={onRemove}>친구 삭제</button>
    </div>
  )
}