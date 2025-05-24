
import React, { useState } from "react";
import EmojiShop from "../../components/emojiShop";
import Topbar from "../../components/topbar";

const EmojiPage = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [filter, setFilter] = useState('인기순');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Topbar title="이모티콘" />
      <div style={{ flex: 1, display: 'flex' }}>
        <EmojiShop
          selectedId={selectedId}
          onSelect={setSelectedId}
          filter={filter}
          onFilter={setFilter}
          // onBuy 등은 실제 구현에서 연결
        />
      </div>
    </div>
  );
};

export default EmojiPage;
