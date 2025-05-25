// props:
//   data: [{ emojiId, emojiName, mainEmojiUrl, sellerName }, …]
//   onSelect: (item) => void — 목록 아이템 클릭 시 호출
export default function ShopList({ data, onSelect }) {
  return (
    <ul className="shop-list">
      {data.map(item => (
        <li key={item.emojiId} onClick={() => onSelect(item)}>
          <img src={item.mainEmojiUrl} alt={item.emojiName} />
          <div>
            <h4>{item.emojiName}</h4>
            <small>{item.sellerName}</small>
          </div>
        </li>
      ))}
    </ul>
  )
}