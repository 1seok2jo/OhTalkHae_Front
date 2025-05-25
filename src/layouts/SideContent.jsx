import ShopList from '../components/shop/ShopList'
import FriendList from '../components/friends/FriendList'
import FriendRequests from '../components/friends/FriendRequests'
import ChatList from '../components/chat/ChatList'
import AlertList from '../components/alerts/AlertList'

export default function SideContent({ view, data, onAction }) {
  switch(view) {
    case 'shop':
      return <ShopList data={data.shop} onSelect={onAction} />
    case 'friends':
      return (
        <>
          <FriendRequests requests={data.requests} onAction={(id,ok)=>{/*…*/}}/>
          <FriendList    friends={data.friends}  onSelect={onAction}/>
        </>
      )
    case 'chats':
      return <ChatList chats={data.chats} onSelect={onAction} />
    case 'alerts':
      return <AlertList alerts={data.alerts} onClear={id=>{/*…*/}} />
    default:
      return null
  }
}
