import './infoDuy.css';
import { useState } from 'react';
import duy_img from '../../../assets/duy_img.jpg'
const InfoDuy = () => {
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [showChatCustom, setShowChatCustom] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [isPinnedMessageVisible, setIsPinnedMessageVisible] = useState(false);
  const [popupType, setPopupType] = useState('');

  const toggleChatInfo = () => {
    setShowChatInfo(!showChatInfo);
  }
  const toggleChatCustom = () => {
    setShowChatCustom(!showChatCustom);
  }

  const toggleFiles = () => {
    setShowFiles(!showFiles);
  }

  const toggleBlock = () => {
    setShowBlock(!showBlock);
  }

  const togglePinnedMessageModal = () => {
    setIsPinnedMessageVisible(!isPinnedMessageVisible);
  }

  const openPopup = (type) => {
    setPopupType(type);
  }

  const closePopup = () => {
    setPopupType('');
  };


  return (
    <div className="sidebar-person">

      <div className="sidebar__profile">
        <img
          src={duy_img}
          alt="Profile"
          className="profile__image"
        />
        <div className="infor-status"></div>
        <p className="profile__name">Nguyen Dang Duy</p>
        <p className="status">online</p>

        <div className="profile__actions">
          <div className="profile__action-button">
            <img src="/bell.png" alt="Bell Icon" />
            <p>Turn off notification</p>
          </div>

          <div className="profile__action-button">
            <img src="/search.png" alt="Search Icon" />
            <p>Search</p>
          </div>
        </div>
      </div>

      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatInfo}>Chat information
          <span className="arrow">{showChatInfo ? '▲' : '▼'}</span>
        </p>
        {showChatInfo && (
          <div>
            <div className="menu__item" onClick={togglePinnedMessageModal}>
              <img src="/pin.png" alt="Pin Icon" className="icon" />
              View pinned messages
            </div>
          </div>
        )}
      </div>


      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleChatCustom}>Customize Chat
          <span className="arrow">{showChatCustom ? '▲' : '▼'}</span>
        </p>
        {showChatCustom && (
          <div>
            <div className="menu__item" onClick={() => openPopup('changeTheme')}>
              <img src="/chude.png" alt="Theme Icon" className="icon" /> Change theme
            </div>
            <div className="menu__item" onClick={() => openPopup('editNickname')}>
              <img src="/nickname.png" alt="Nickname Icon" className="icon" /> Edit nickname
            </div>
          </div>
        )}
      </div>



      {isPinnedMessageVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Pinned Messages</h2>
              <button className="close-btn" onClick={togglePinnedMessageModal}>×</button>
            </div>
            <div className="modal-body">
              <img src="/pin_icon.png" alt="Pin Icon" className="modal-icon" />
              <p>No messages pinned yet</p>
              <span>Pinned messages in this chat will appear here</span>
            </div>
          </div>
        </div>
      )}

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


      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleFiles}> Media files & files
          <span className="arrow">{showFiles ? '▲' : '▼'}</span>
        </p>
        {showFiles && (
          <div>
            <div className="menu__item">
              <img src="/file1.png" alt="Media Icon" className="icon" /> Media files</div>
            <div className="menu__item">
              <img src="/file.png" alt="File Icon" className="icon" /> File</div>
          </div>
        )}
      </div>

      <div className="menu__section">
        <p className="menu__section-title" onClick={toggleBlock}>More
          <span className="arrow">{showBlock ? '▲' : '▼'}</span>
        </p>
        {showBlock && (
          <div>
            <div className="menu__item">
              <img src="/block_user.png" alt="Block Icon" className="icon" /> Block</div>
          </div>
        )}
      </div>
    </div>
  );
};

const getPopupTitle = (type) => {
  switch (type) {
    case 'changeTheme':
      return 'Change theme';
    case 'editNickname':
      return 'Edit nickname';
    default:
      return '';
  }
};


const renderPopupContent = (type) => {
  switch (type) {
    case 'changeTheme':
      return <img src="/cde.png" alt="Theme Image" style={{ width: '100%' }} />;
    case 'editNickname':
      return <input type="text" placeholder="Enter a new nickname" />;
    default:
      return null;
  }
};


export default InfoDuy;