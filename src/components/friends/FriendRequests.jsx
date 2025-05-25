// props:
//   requests: [{ requestId, requesterName, timeAgo }, …]
//   onAction: (requestId, accept:boolean) => void
export default function FriendRequests({ requests, onAction }) {

  return (
    <div className="friend-requests">
      <h3>친구 요청</h3>
      {requests.map(r => (
        <div key={r.requestId} className="request-item">
          <span>{r.requesterName} ({r.timeAgo})</span>
          <button onClick={() => onAction(r.requestId, true)}>수락</button>
          <button onClick={() => onAction(r.requestId, false)}>거절</button>
        </div>
      ))}
    </div>
  )
}