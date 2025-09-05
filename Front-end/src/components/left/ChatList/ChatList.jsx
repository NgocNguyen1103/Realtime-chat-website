import React from 'react';
import './ChatList.css';
import profile_icon from "../../../assets/profile_icon.png";
import edit_icon from "../../../assets/edit_icon.png";
import nghia from '../../../assets/nghia_img.jpg'
import duy from '../../../assets/duy_img.jpg'
import ngoc from '../../../assets/ngoc_img.png'
import duc from '../../../assets/duc_img.jpg'
import phuong from '../../../assets/phuong_img.jpg'
import ava_group from '../../../assets/group.png'
import { Link } from 'react-router-dom';

const ChatList = () => {
  const chatItems = [
    {
      name: 'Web application group',
      lastMessage: 'Thank, Phuong!...',
      img: ava_group,
    },
    {
      name: 'Phuong Pham Duc',
      lastMessage: 'Sounds like...',
      img: phuong,
    },
    {
      name: 'Nguyen Quang Ngoc',
      lastMessage: 'Yes, that...',
      img: ngoc,
    },
    {
      name: 'Nghia Nguyen',
      lastMessage: 'Today was...',
      img: nghia,
    },
    {
      name: 'Nguyen Minh Duc',
      lastMessage: 'No problem...',
      img: duc,
    },
    {
      name: 'Nguyen Dang Duy',
      lastMessage: 'Yeah, delays...',
      img: duy,
    }
  ];

  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h3>Chats</h3>
        <img src={edit_icon} alt="Edit" className="edit-icon" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Messenger" />
      </div>

      <div className='Conversations'>
        {chatItems.map((item, index) => (
          <Link to={`${index + 1}`} style={{ textDecoration: 'none' }}>
            <div className="chat-item" key={index}>
              <img src={item.img} alt={item.name} className="chat-item-img" />
              <div className="left-status"></div>
              <div className="chat-item-content">
                <h4>{item.name}</h4>
                <p>{item.lastMessage}</p>
              </div>
            </div></Link>
        ))}
      </div>


    </div>
  );
};

export default ChatList;
