import ShopDetail     from '../components/shop/ShopDetail'
import FriendDetail   from '../components/friends/FriendDetail'
import ChatRoom       from '../components/chat/ChatRoom'
import AlertMenu from '../components/alerts/AlertMenu';


export default function MainContent({ view, detail, children }) {
  if (view === 'shop')
    return <ShopDetail detail={detail} onBuy={()=>{/*…*/}} />

  if (view === 'friends')
    return <FriendDetail friend={detail} onChat={()=>{/*…*/}} onRemove={()=>{/*…*/}}/>

  if (view === 'chats')
    return <ChatRoom chat={detail} messages={[]} onSend={text=>{/*…*/}} />

if (view === 'alerts') {
  return (
    <section className="main-content">
      <AlertMenu
        alerts={data.alerts}
        onToggle={handleToggleAlerts}
        onClearAll={handleClearAllAlerts}
        onClear={handleClearAlert}
      />
    </section>
  );}

  // Home, Login, Register 라우팅용 Outlet
  return <>{children}</>
}