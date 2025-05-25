// props:
//   friends: [{ userId, nickname, statusMessage}, …]
//   onSelect: (friend) => void
export default function FriendList({ friends, onSelect }) {
  return (
    <ul className="friend-list">
      {friends.map(f => (
        <li key={f.userId} onClick={() => onSelect(f)}>
          <strong>{f.nickname}</strong>
          <p>{f.statusMessage}</p>
        </li>
      ))}
    </ul>
  )
}