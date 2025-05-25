export default function Topbar({ title, onSearch, onAdd }) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <div className="actions">
        <button onClick={onSearch}>🔍</button>
        <button onClick={onAdd}>＋</button>
      </div>
    </header>
  )
}