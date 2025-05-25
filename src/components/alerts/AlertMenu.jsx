import React from 'react';

/*
 * props:
 *  - alerts: [{ alertId, message, timeAgo }, ...]
 *  - onToggle: () => void                 // 알림 끄기 토글
 *  - onClearAll: () => void                // 모든 알림 삭제
 *  - onClear: (alertId) => void            // 개별 알림 삭제
 */
export default function AlertMenu({ alerts, onToggle, onClearAll, onClear }) {
  return (
    <div className="alert-menu">
      {/* 상단 액션 버튼 */}
      <div className="alert-menu-actions">
        <button onClick={onToggle}>알림 끄기</button>
        <button onClick={onClearAll}>모두 지우기</button>
      </div>

      {/* 알림 리스트 */}
      <ul className="alert-menu-list">
        {alerts.map(alert => (
          <li key={alert.alertId} className="alert-menu-item">
            <div className="alert-content">
              <span className="alert-message">{alert.message}</span>
              <span className="alert-time">{alert.timeAgo}</span>
            </div>
            <button
              className="alert-clear-btn"
              aria-label="알림 삭제"
              onClick={() => onClear(alert.alertId)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}