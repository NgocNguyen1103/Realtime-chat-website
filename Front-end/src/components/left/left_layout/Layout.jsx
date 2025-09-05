import React from 'react';
import SideNav from '../SideNav/SideNav';
import ChatList from '../ChatList/ChatList';
import './Layout.css';

const LeftLayout = () => {
  return (
    <div className="main-layout">

      <SideNav />


      <ChatList />
    </div>
  );
};

export default LeftLayout;
