
import React from "react";
import FriendList from "../../components/friendList";
import Topbar from "../../components/topbar";

const FriendPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Topbar title="친구" />
      <div style={{ flex: 1, display: 'flex' }}>
        <FriendList />
      </div>
    </div>
  );
};

export default FriendPage;
