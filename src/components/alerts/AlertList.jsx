// props:
//   alerts: [{ alertId, type, message, timeAgo }, …]
//   onClear: (alertId) => void
export default function AlertList({ alerts, onClear }) {
  return (
    <ul className="alert-list">
      {alerts.map(a => (
        <li key={a.alertId}>
          <span>{a.message} ({a.timeAgo})</span>
          <button onClick={() => onClear(a.alertId)}>×</button>
        </li>
      ))}
    </ul>
  )
}