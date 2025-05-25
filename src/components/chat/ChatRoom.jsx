// props:
//   chat: { chatId, name }
//   messages: [{ sender, text, time }, …]
//   onSend: (text) => void
export default function ChatRoom({ chat, messages, onSend }) {
  if (!chat) return <div>채팅방을 선택해 주세요.</div>;

  return (
    <div className="chat-room">
      <h2>{chat.name}</h2>
      <div className="messages">
        {messages.map((m,i) => (
          <div key={i} className={`message ${m.sender === 'me'? 'mine':''}`}>
            <p>{m.text}</p><small>{m.time}</small>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input type="text" placeholder="메시지 입력…" onKeyDown={e => {
          if (e.key === 'Enter') onSend(e.target.value);
        }}/>
        <button onClick={() => onSend(/* input value */)}>전송</button>
      </div>
    </div>
  )
}