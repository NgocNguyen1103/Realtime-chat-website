import React from 'react'
import './Privacy.css'
import using_app from '../../assets/person-using-laptop.jpg'
import data_protection from '../../assets/data_protection.avif'
import unwanted from '../../assets/unwanted_interact.svg'
import control_letin from'../../assets/control_letin.svg'
import misinfor from '../../assets/misinfor.svg'
import safe_community from '../../assets/safe_community.svg'

const Privacy = () => {
    return (
        <div className='privacy'>
            <div className="privacy-slogan">
                <p className="slogan-content">Connect with confidence</p>
                <img src={using_app} alt="" className="slogan-img" />
            </div>
            <div className="privacy-connect">
                <p className="privacy-connect-title">
                    Protecting your privacy
                </p>
                <p className="privacy-connect-content">
                    Who you talk to and what you share should be up to you. We’re dedicated to making sure ChatApp is a safe, private, and secure place for you to connect with the people who matter. To do this, we’ve built tools that allow you to stay in control, secure your account, and stay safe on the platform.
                </p>

                <img className="privacy-connect-img" src={data_protection} alt="" />
            </div>
            <hr />
            <div className="privacy-personal">
                <img src={using_app} alt="" className="slogan-img" />
                <div className="privacy-personal-content">
                    <p className="personal-title">Your personal messages are private.</p>
                    <p className="personal-content">We want you to know how we use your information. We collect information from ChatApp so that we can improve the product experience and keep people safe and secure. We don’t use the content of your personal messages for ads personalization.  Some types of messages that aren’t personal include messages to and from business accounts messages in features designed to be more public, like channels. Meta is also adding an additional layer of privacy by securing personal messages. We is also adding an additional layer of privacy by securing personal messages and calls  with end-to-end encryption, which means nobody, including us, can see or listen to what’s sent or said in your calls or messages.</p>
                    <button className="personal-more">Learn more</button>
                </div>

            </div>
            <hr />
            <div className="design-safety">

                <p className="design-safety-title">BUILD WITH SAFETY BY DESIGN</p>
                <p className="design-safety-desc">ChatApp has tools to help keep you safe and in control of your own experience.</p>

                <div className="design-safety-content">
                    <p className="content-title">ChatApp’s approach to safer private messaging:</p>

                    <div className="content-cards">
                        <div className="card1">
                            <p className="card-title">Preventing harm
                                at the source</p>
                            <p className="card-content">Preventing harm from happening in the first place is the best way to keep people safe.</p>
                        </div>

                        <div className="card2">
                            <p className="card-title">Giving you more choice and control</p>
                            <p className="card-content">In addition to our efforts to prevent harm, we are giving you more control of your messaging inbox to account for the variety of experiences you want.</p>
                        </div>

                        <div className="card3">
                            <p className="card-title">Responding
                                with care</p>
                            <p className="card-content">When we become aware of potential abuse on our services, we respond. We do this by enforcing our Community Standards, sharing data with NCMEC and our law enforcement agencies.</p>
                        </div>

                    </div>

                </div>
            </div>
            <hr />
            <div className="keep-safe">

                <p className="keep-safe-title">HELPING TO KEEP YOU SAFE</p>
                <p className="keep-safe-desc">Messenger helps to keep you safe online.</p>

                <div className="keep-safe-content">
                    <p className="content-title">That’s why we’re constantly working to stop malicious activity before it reaches you.<br /> Here are the ways we work to protect your safety on Messenger:</p>

                    <div className="content-cards">
                        <div className="card1">
                            <div className="card-title">
                                <img src={unwanted} ></img>
                                <p className="card-title">Reduce unwanted interactions</p>
                            </div>
                            
                            <p className="card-content">We filter potentially harmful messages so they don’t reach your inbox. Safety notices may pop up in your chats to help you spot potential scams or imposters, and we detect and block millions of fake accounts on Facebook every day.</p>
                        </div>

                        <div className="card2">

                            <div className="card-title">
                                <img src={control_letin} ></img>
                                <p className="card-title">Control who you let in</p>
                            </div>
                            
                            <p className="card-content">Messenger continuously innovates to protect you from harm, and tools like multi block help you control your experience. You decide who reaches your Chats list, who goes to your Message Request folder, and who can’t message or call you at all.</p>
                        </div>

                        <div className="card3">
                            <div className="card-title">

                                <img src={misinfor} ></img>
                                <p className="card-title">Reduce the spread of misinformation</p>

                            </div>
                            <p className="card-content">To help reduce the spread of viral misinformation and harmful content, we limit the number of chats a message can be forwarded to at one time. We also have additional protections in place for content that has been identified as misinformation and shared directly into ChatApp</p>
                        </div>

                        <div className="card4">
                            <div className="card-title">
                                <img src={safe_community} ></img>
                                <p className="card-title">Foster a safer community</p>

                            </div>
                            <p className="card-content">If you come across possible harmful content or behavior, such as harassment or impersonation, please report it. If we see that it violates our Community Standards, we’ll take appropriate action, which could include disabling their account or limiting their ability to send messages.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Privacy