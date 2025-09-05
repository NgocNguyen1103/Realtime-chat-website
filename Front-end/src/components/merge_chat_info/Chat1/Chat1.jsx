import React from 'react'

import Chat_group from '../../mid/Group_chat/Chat_group'
import InfoSection from '../../right/InfoSection/InfoSection'
import './Chat1.css'

const Chat1 = () => {
    return (
        <div className='chatbox-section'>
            <Chat_group />
            <InfoSection />
        </div>
    )
}

export default Chat1