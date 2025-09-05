import React, { useState } from 'react'; 
import './SideNav.css'; 
import nghia from "../../../assets/nghia_img.jpg";
import ProfileSettings from '../profile_setting/ProfileSettings'; 

const SideNav = () => {
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const handleProfileClick = () => {
    setShowProfileSettings(true); 
  };

  const handleCloseSettings = () => {
    setShowProfileSettings(false); 
  };

  return (
    <div>
      <nav className="side-nav-bar">
        <ul>
          <li>
            <img
              src={nghia}
              alt="Profile 1"
              className="profile-icon"
              onClick={handleProfileClick} 
            />
          </li>
          <li className="divider"></li>
        </ul>
      </nav>

      {showProfileSettings && (
        <ProfileSettings onClose={handleCloseSettings} /> 
      )}
    </div>
  );
};

export default SideNav;
