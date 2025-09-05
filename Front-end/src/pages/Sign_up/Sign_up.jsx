import React from 'react'
import './Sign_up.css'
const Sign_up = () => {
    return (
        <div className='sign-up'>
            <div className="signup-container">
                <h1>Sign up</h1>
                <div className="input-form">
                    <input type="text" placeholder='Your name' />
                    <input type="date" placeholder='Date of Birth' />
                    <div className="gender-form">
                        <div className="male">
                            <input type="radio" id="male" name="gender" />
                            <label for="male">Male</label>
                        </div>
                        <div className="female" >
                            <input type="radio" id="female" name="gender" />
                            <label for="female">Female</label>
                        </div>


                    </div>
                    <input type="email" placeholder='Your email' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className="signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
                <button>Sign Up</button>

            </div>
        </div>
    )
}

export default Sign_up