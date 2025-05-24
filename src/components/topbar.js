
import React from "react";

const Topbar = ({ title, rightContent }) => {
  return (
    <header style={{
      width: '100%',
      height: 48,
      background: '#f8f8f8',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      boxSizing: 'border-box',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: 20 }}>{title || 'Oh Talk Hae'}</div>
      <div>{rightContent}</div>
    </header>
  );
};

export default Topbar;
