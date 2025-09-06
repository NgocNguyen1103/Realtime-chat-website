import React from 'react'
import './Sign_up.css'
import axios from "axios"
import { useState } from 'react'


const Sign_up = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        dob: "",
        agree: false
    })

    const handleChange = (e) => {
        console.log(e.target.value);

        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value, }));


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            if (formData.agree === true) {
                const res = await axios.post("http://localhost:4000/api/auth/register", formData, {
                    withCredentials: true,
                });
                console.log("Registed Successful", res.data);
                alert("Register successfully");
            } else {
                alert("Please agree with the policy")
            }

        } catch (err) {
            console.log("Failed", err.response?.data || err.message);
            alert("Failed");

        }
    }
    return (
        <div className='sign-up'>
            <form className="signup-container" onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <div className="input-form">
                    <input type="text" name="name" placeholder='Your name' value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder='Your email' value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />

                    <div className="gender-form" >
                        <div className="male">
                            <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
                            <label for="male">Male</label>
                        </div>
                        <div className="female" >
                            <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
                            <label for="female">Female</label>
                        </div>


                    </div>
                    <input type="date" name="dob" placeholder='Date of Birth' value={formData.dob} onChange={handleChange} />
                </div>
                <div className="signup-agree">
                    <input type="checkbox" name="agree" id="policy" checked={formData.agree} onChange={handleChange} />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
                <button>Sign Up</button>

            </form>
        </div>
    )
}

export default Sign_up