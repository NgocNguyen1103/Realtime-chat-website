import React from 'react'
import windows from '../../assets/computer.png'
import laptop from '../../assets/splash_screen.png'
import './DesktopApp.css'

const DesktopApp = () => {
    return (
        <div className='desk-app'>
            <div className="desk-desc">
                <p className="desk-title">
                    Desktop Version is available
                </p>
                <p className="desk-content">
                    A simple app that lets you text, video call and stay close to people you care about. For Mac and PC.
                </p>
                <div className="down-btn">
                    <img src={windows} alt="windows" className="win-img" />
                    Download for Window
                </div>
            </div>
            <div className="desk-img"><img src={laptop} alt="laptops" className="laptop-img" /></div>

        </div>
    )
}

export default DesktopApp