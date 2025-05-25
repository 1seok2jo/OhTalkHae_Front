import { Outlet, Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import MainContent from './MainContent'
import SideContent from './SideContent'

export default function MainLayout({ view, setView, detail, setDetail, data }) {
    
    // Topbar에 표시할 제목
    const title =
        view === 'friends' ? '친구' :
        view === 'chats' ? '채팅방' :
        view === 'shop' ? '이모티콘' :
        view === 'alerts' ? '알림' :
        '설정';
    
    return (
    <div className="app-container">
      <Sidebar active={view} onChange={setView} />

      <div className="content-area">
        <Topbar
          title={title}
          onSearch={() => {/* 검색 모달 열기 */}}
          onAdd={() => {/* + 모달 열기 */}}
        />

        <div className="body">
          <SideContent
            view={view}
            data={data}
            onAction={item => setDetail(item)}
          />

          {/* 
            MainContent 내부에서 
            - view 가 shop/friends/chats/alerts 일 땐 detail 뷰로,
            - 아닌 경우(예: Home 컴포넌트) Outlet 으로 라우트된 페이지를 렌더 
          */}
          <MainContent view={view} detail={detail}>
            <Outlet />
          </MainContent>
        </div>
      </div>
    </div>
  );
}