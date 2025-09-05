import React from 'react'
import "./chat_ngoc.css"

import phone from '../../../assets/phone-call.png'
import phone_vid from '../../../assets/video-camera-alt.png'
import send from '../../../assets/send_button.png'
import emoji from '../../../assets/happiness.png'
import menu from '../../../assets/menu-burger.png'
import mic from '../../../assets/microphone.png'
import image from '../../../assets/image-gallery.png'
import cam from '../../../assets/camera.png'
import nghia from '../../../assets/nghia_img.jpg'

import ngoc from '../../../assets/ngoc_img.png'


import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

const Chat_ngoc = () => {
  const [pickEmoji, setPickEmoji] = useState(false);
  const [text, setText] = useState("");

  const toggleEmojiPicker = () => {
    setPickEmoji((prev) => !prev);
  };

  const handleEmo = (e) => {
    setText((prev) => prev + e.emoji);
    setPickEmoji(false);
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={ngoc} alt="" />
          <div className="user-status"></div>
          <div className="userDetails">
            <span>Nguyen Quang Ngoc</span>
            <p>online</p>
          </div>
        </div>

        <div className="icons">
          <img src={phone} alt="" />
          <img src={phone_vid} alt="" />
          <img src={menu} alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src={ngoc} alt="" />
          <div className="messageText">
            <p>
              Hey Nghia, I’ve been thinking about that road trip we talked about last month. I know things got busy, but do you think we could finally make it happen next weekend?
            </p>
            <div className="date">
              <span>10 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Oh, I’ve been meaning to bring that up! Next weekend actually works for me. I could really use a break from the city. Did you have a specific destination in mind, or are we still going with our original plan to drive along the coast?
            </p>
            <div className="date">
              <span>8 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={ngoc} alt="" />
          <div className="messageText">
            <p>
              I was thinking we could stick with the coastal route. I’ve always wanted to check out some of those small beach towns. Plus, we could stop by that famous seafood restaurant you mentioned last time. I heard they have the best lobster rolls in the state!
            </p>
            <div className="date">
              <span>7 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              Yes! That seafood place is a must. I’ve been craving lobster rolls for weeks. How many days are we thinking for this trip? I’m free from Friday afternoon, so we could head out then and come back on Sunday evening if that works for you.
            </p>
            <div className="date">
              <span>6 minutes ago</span>
            </div>
          </div>

          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={ngoc} alt="" />
          <div className="messageText">
            <p>
              That sounds perfect. I was thinking two or three days would be ideal. We can leave Friday afternoon, like you said, and take our time exploring on the way. No need to rush. I’ll book a couple of places for us to stay along the coast – maybe one night at a bed and breakfast and another at a beachside motel. What do you think?
            </p>
            <div className="date">
              <span>4 minutes ago</span>
            </div>
          </div>

        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              That sounds like such a good mix! A cozy bed and breakfast for one night, and then waking up to the ocean view at a motel the next day – I love it. We should definitely pack some snacks for the road, too. And don’t forget a good playlist! We can’t have a road trip without some music to sing along to.
            </p>
            <div className="date">
              <span>3 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={ngoc} alt="" />
          <div className="messageText">
            <p>
              Absolutely. I’ll get started on the playlist right away. It’ll be a mix of classic rock, indie, and maybe some 80s hits for fun. Do you have any specific songs you want me to add? As for snacks, I was thinking we could stock up on trail mix, fruit, and maybe some chips for the drive. We can also stop by a few local bakeries we pass along the way
            </p>
            <div className="date">
              <span>2 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Yes, that sounds perfect! I’ll leave the playlist to you; I trust your taste in music. I’ll handle the snacks – I’ll make sure we have everything we need, and I’ll throw in some chocolate for the drive. Also, I was thinking, since we’re taking the coastal route, maybe we can stop at that lighthouse everyone always talks about. It’s supposed to have an amazing view.
            </p>
            <div className="date">
              <span>1 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

      </div>

      <div className="bottom">

        <img src={image} alt="" />
        <img src={cam} alt="" />
        <img src={mic} alt="" />

        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src={emoji} alt="" onClick={toggleEmojiPicker} />
          <div className="picker">
            {pickEmoji && <EmojiPicker onEmojiClick={handleEmo} />}
          </div>
        </div>
        <button className="send">Send</button>
      </div>
    </div>
  );
};

export default Chat_ngoc