import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import './Login_Navbar.css'
import { Link } from 'react-router-dom'

const Login_Navbar = () => {

    const [menu, setMenu] = useState('')

    return (
        <div className='Login-navbar'>
            <div className="login-nav-logo">
                <Link to='/' style={{ textDecoration: "none" }}>
                    <img src={logo} alt="logo" onClick={() => { setMenu('home') }} /></Link>
            </div>
            <div className="nav-intro">
                <ul className="login-nav-menu">
                    <Link to='/features' style={{ textDecoration: "none" }}>
                        <li className='login-nav-li' onClick={() => { setMenu('features') }}>
                            Features{menu === 'features' ? <hr /> : <></>}
                        </li>
                    </Link>
                    <Link to='/desktop-app' style={{ textDecoration: "none" }}>
                        <li className='login-nav-li' onClick={() => { setMenu('desk-app') }}>
                            Desktop App{menu === 'desk-app' ? <hr /> : <></>}
                        </li>
                    </Link>
                    <Link to='/privacy' style={{ textDecoration: "none" }}>
                        <li className='login-nav-li' onClick={() => { setMenu('privacy') }}>
                            Privacy & Safety{menu === 'privacy' ? <hr /> : <></>}
                        </li>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: "none", color: "#007BFF" }}>
                    <li className='login-nav-li' onClick={() => { setMenu('sign-up') }}>
                        Sign up{menu === 'sign-up' ? <hr /> : <></>}
                    </li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Login_Navbar