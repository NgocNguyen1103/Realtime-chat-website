import React from 'react';
import './ProfileSettings.css';
import nghia from '../../../assets/nghia_img.jpg';
import activeStatusIcon from '../../../assets/active_status_icon.png';
import notificationSoundIcon from '../../../assets/notification_sound_icon.png';
import doNotDisturbIcon from '../../../assets/do_not_disturb_icon.png';
import darkModeIcon from '../../../assets/dark_mode_icon.png';
import logOut from '../../../assets/logout.png'
import { Link } from 'react-router-dom';


const ProfileSettings = ({ onClose }) => {
  return (
    <div className="profile-settings-overlay">
      <div className="profile-settings">
        <button className="close-button" onClick={onClose}>×</button>
        <h1 className="options-title">Preferences</h1>



        <div className="account-section">
          <img src={nghia} alt="Account" className="section-ava" />
          <div>
            <h3>Nghia Nguyen </h3>
            <h5>See your profile</h5>
          </div>
        </div>
        <hr style={{ borderColor: '#4f4f4f', width: '100%', margin: '15px auto', borderWidth: '1px', opacity: 0.2 }} />


        <div className="section">
          <div className="icon-text-wrapper">
            <img src={activeStatusIcon} alt="Active Status" className="section-icon" />
            <h3>Active Status: ON</h3>
          </div>
        </div>
        <hr style={{ borderColor: '#4f4f4f', width: '100%', margin: '15px auto', borderWidth: '1px', opacity: 0.2 }} />


        <div className="section">
          <h3>Notifications</h3>
          <ul>
            <div className='account-section'>
              <img src={notificationSoundIcon} alt="Notification Sound" className="section-icon" />
              <div style={{ width: 543 }}>
                <h3>
                  Notification sounds
                </h3>
                <h5>
                  Use sound to notify you about incoming messages, calls, video chats, and in-app sounds
                </h5>
              </div>
              <input type="checkbox" />
            </div>
            <div className='account-section'>
              <img src={doNotDisturbIcon} alt="Do Not Disturb" className="section-icon" />
              <div style={{ width: 543 }}>
                <h3>Do Not Disturb</h3>
                <h5>
                  Mute notifications for a specific period of time
                </h5>
              </div>

              <input type="checkbox" />
            </div>
          </ul>
        </div>
        <hr style={{ borderColor: '#4f4f4f', width: '100%', margin: '15px auto', borderWidth: '1px', opacity: 0.2 }} />

        { }
        <div className="section">
          <div className="icon-text-wrapper">
            <img src={darkModeIcon} alt="Dark Mode" className="section-icon" />
            <h3 className="centered-text">Dark mode</h3> { }
          </div>
          <ul>
            <li>
              <span className="centered-text">Off</span>
              <input type="radio" name="theme" />
            </li>
            <li>
              <span className="centered-text">On</span>
              <input type="radio" name="theme" />
            </li>
            <li>
              <span className="centered-text">Automatic</span>
              <input type="radio" name="theme" />
            </li>
          </ul>
        </div>
        <hr style={{ borderColor: '#4f4f4f', width: '100%', margin: '15px auto', borderWidth: '1px', opacity: 0.2 }} />
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
          <div className="section">
            <div className="icon-text-wrapper">
              <img src={logOut} alt="logOut" className="section-icon" />
              <h3>Logout</h3>
            </div>
          </div></Link>
      </div>
    </div>


  );
};

export default ProfileSettings;
