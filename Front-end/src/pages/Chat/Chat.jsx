import React from 'react'
import './chat.css'


import LeftLayout from '../../components/left/left_layout/Layout'

import { Outlet } from 'react-router-dom'


const Chat = () => {
  return (

    <div class="main-layout-chat">
      <div class="left-section">
        <LeftLayout />
      </div>
      <div className="chat-section">

        <Outlet />
      </div>

    </div>
  )
}

export default Chat