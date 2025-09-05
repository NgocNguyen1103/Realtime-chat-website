import React, { useState } from 'react';
import './InfoSection.css';
import group_img from '../../../assets/group.png'
const InfoSection = () => {
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [showChatSettings, setShowChatSettings] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  const [popupType, setPopupType] = useState('');

  const openPopup = (type) => {
    setPopupType(type);
  };

  const closePopup = () => {
    setPopupType('');
  };

  const toggleChatInfo = () => {
    setShowChatInfo(!showChatInfo);
  };

  const toggleChatSettings = () => {
    setShowChatSettings(!showChatSettings);
  };

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  const toggleFiles = () => {
    setShowFiles(!showFiles);
  };
  return (
    <div className="info-section">
      <div className="profile">
        <div className="avatar-container">
          <img src={group_img} alt="Group Avatar" className="avatar" />
        </div>
        <h3>Web Group 2024</h3>
        <p className="status">Active</p>
      </div>

      <div className="action-buttons">
        <div className="action-btn">
          <img src="/bell.png" alt="Bell Icon" />
          <p>Turn on again</p>
        </div>
        <div className="action-btn">
          <img src="/search.png" alt="Search Icon" />
          <p>Search</p>
        </div>
      </div>

      <ul className="options">
        <li onClick={toggleChatInfo}>
          Chat Information
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </li>
        {showChatInfo && (
          <ul className="sub-options">
            <li onClick={() => openPopup('pinnedMessages')}>
              <img src="/pin.png" alt="Pin Icon" className="icon" />
              View pinned messages
            </li>
          </ul>
        )}

        <li onClick={toggleChatSettings}>
          Chat Settings
          <span className="arrow">{showChatSettings ? '▲' : '▼'}</span>
        </li>
        {showChatSettings && (
          <ul className="sub-options">
            <li onClick={() => openPopup('rename')}>
              <img src="/pencil.png" alt="Edit Icon" className="icon" />
              Rename chat
            </li>
            <li onClick={() => openPopup('changeImage')}>
              <img src="/image_icon.png" alt="Photo Icon" className="icon" />
              Change image
            </li>
            <li onClick={() => openPopup('changeTheme')}>
              <img src="/chude.png" alt="Theme Icon" className="icon" />
              Change theme
            </li>
            <li onClick={() => openPopup('editNickname')}>
              <img src="/nickname.png" alt="Nickname Icon" className="icon" />
              Edit nickname
            </li>
          </ul>
        )}

        <li onClick={toggleMembers}>
          Chat Members
          <span className="arrow">{showMembers ? '▲' : '▼'}</span>
        </li>
        {showMembers && (
          <ul className="members">
            <li className="member-item">
              <img src="/duy_ava.png" alt="Dang Duy" className="member-avatar" />
              <div>
                <p>Dang Duy</p>
                <span>Added by Nguyen Quang Ngoc</span>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/nghia_ava.png" alt="Nghia Nguyen" className="member-avatar" />
              <div>
                <p>Nghia Nguyen</p>
                <span>Added by Nguyen Quang Ngoc</span>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/duc_ava.png" alt="Nguyen Minh Duc" className="member-avatar" />
              <div>
                <p>Nguyen Minh Duc</p>
                <span>Added by Nguyen Quang Ngoc</span>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/ngoc_ava.png" alt="Nguyen Quang Ngoc" className="member-avatar" />
              <div>
                <p>Nguyen Quang Ngoc</p>
                <div className="admin">Group Creator</div>
              </div>
              <div className="member-options">...</div>
            </li>
            <li className="member-item">
              <img src="/phương_ava.png" alt="Phuong Pham Duc" className="member-avatar" />
              <div>
                <p>Phuong Pham Duc</p>
                <div>Added by Nguyen Quang Ngoc</div>
              </div>
              
            </li>
            <li className="member-item">
              <img src="/add_member.png" alt="Add User Icon" className="member-avatar" />
              <div>
                <div className="add">Add Member</div>
              </div>
            </li>
          </ul>
        )}

        <li onClick={toggleFiles}>
          Media, Files, and Links
          <span className="arrow">{showFiles ? '▲' : '▼'}</span>
        </li>
        {showFiles && (
          <ul className="sub-options">
            <li>
              <img src="/file1.png" alt="Media Icon" className="icon" />
              Media
            </li>
            <li>
              <img src="/file.png" alt="File Icon" className="icon" />
              Files
            </li>
            <li>
              <img src="/link.png" alt="Link Icon" className="icon" />
              Links
            </li>
          </ul>
        )}

        <li className="options-item">Leave Group</li>

        {popupType && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>{getPopupTitle(popupType)}</h2>
                <button className="close-btn" onClick={closePopup}>×</button>
              </div>
              <div className="modal-body">
                {renderPopupContent(popupType)}
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

const getPopupTitle = (type) => {
  switch (type) {
    case 'rename':
      return 'Rename Chat';
    case 'changeImage':
      return 'Change Image';
    case 'changeTheme':
      return 'Change Theme';
    case 'editNickname':
      return 'Edit Nickname';
    case 'pinnedMessages':
      return 'Pinned Messages';
    default:
      return '';
  }
};

const renderPopupContent = (type) => {
  switch (type) {
    case 'rename':
      return <input type="text" placeholder="Enter new chat name" />;
    case 'changeImage':
      return <input type="file" />;
    case 'changeTheme':
      return <img src="/cde.png" alt="Theme Image" style={{ width: '100%' }} />;
    case 'editNickname':
      return <input type="text" placeholder="Enter new nickname" />;
    case 'pinnedMessages':
      return <p>No pinned messages</p>;
    default:
      return null;
  }
};

export default InfoSection;