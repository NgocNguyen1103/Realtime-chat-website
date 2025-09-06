import React, { useState } from 'react'
import './login.css'
import large_logo from '../../assets/logo_icon.png'
import appstore from '../../assets/app_store.png'
import microsoft from '../../assets/microsoft.png'

import { Link, Route, Routes } from 'react-router-dom'
import Sign_up from '../Sign_up/Sign_up'
import axios from 'axios'
import { login } from '../../../../Back-end/controllers/authController'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }
    )

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) =>{
        try{
            const res = await axios.post("http://localhost:4000/api/auth/register", formData, {
                withCredentials: true,
            })
            console.log();
            
        } catch{
            
        }
    }

    return (
        <div>
            <div className="login">
                <div className="left-login">
                    <div className="login-slogan">
                        <p>Connect</p>
                        <p>everytime,</p>
                        <p>everywhere</p>
                    </div>
                    <div className="login-description">
                        <p>Stay in Touch with your Special People and</p>
                        <p>Make New Friends!</p>
                    </div>
                    <div className="login-container">
                        <input type="email" placeholder='Email address' />
                        <input type="password" placeholder='Password' />
                        <div className="button-signup">
                            <Link to='/chat/1' style={{ textDecoration: "none" }}>
                                <button>Log in</button>
                            </Link>
                            <p>New to ChatApp? <Link to='/signup' style={{ textDecoration: "none" }}><span className='sign-up-btn'>Sign up</span></Link> now</p>
                        </div>

                    </div>
                    <div className="login-platform">
                        <img className="microsoft" src={microsoft} alt="Microsoft" />
                        <img className="appstore" src={appstore} alt="app store" />

                    </div>
                </div>
                <div className="right-login">
                    <img src={large_logo} alt='large logo' />
                </div>
            </div>
        </div>
    )
}

export default Login
