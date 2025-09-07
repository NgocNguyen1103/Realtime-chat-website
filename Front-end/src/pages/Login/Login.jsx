import React, { useState } from 'react'
import './login.css'
import large_logo from '../../assets/logo_icon.png'
import appstore from '../../assets/app_store.png'
import microsoft from '../../assets/microsoft.png'
import { Link } from 'react-router-dom';


import axios from 'axios'


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // console.log(formData);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);

            const res = await axios.post("http://localhost:4000/api/auth/login", formData, {
                withCredentials: true,
            })
            console.log("Registed Successful", res.data);
            alert("Login successfully")

        } catch (err) {
            console.log("Failed", err.response?.data || err.message);
            alert("Failed");
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
                    <form className="login-container" onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email address' name='email' value={formData.email} onChange={handleChange} />
                        <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                        <button>Log in</button>

                    </form>
                    <div className="button-signup">

                        <p>New to ChatApp? <Link to='/signup' style={{ textDecoration: "none" }}><span className='sign-up-btn'>Sign up</span></Link> now</p>
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
