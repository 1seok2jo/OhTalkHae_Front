// props:
//   detail: { emojiName, emojiPrice, images: [url,…] }
//   onBuy: () => void
export default function ShopDetail({ detail, onBuy }) {
  if (!detail) return <div>이모티콘을 선택해 주세요.</div>;

  return (
    <div className="shop-detail">
      <h2>{detail.emojiName}</h2>
      <p>{detail.emojiPrice} pt</p>
      <button onClick={onBuy}>구매</button>
      <div className="shop-images">
        {detail.images.map((src,i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>
    </div>
  )
}