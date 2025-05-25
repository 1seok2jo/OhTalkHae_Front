// props:
//   chats: [{ chatId, name, lastMessage, timeAgo, unreadCount }, …]
//   onSelect: (chat) => void
export default function ChatList({ chats, onSelect }) {
  return (
    <ul className="chat-list">
      {chats.map(c => (
        <li key={c.chatId} onClick={() => onSelect(c)}>
          <div>
            <strong>{c.name}</strong>
            <small>{c.timeAgo}</small>
          </div>
          <p>{c.lastMessage}</p>
          {c.unreadCount > 0 && <span className="badge">{c.unreadCount}</span>}
        </li>
      ))}
    </ul>
  )
}