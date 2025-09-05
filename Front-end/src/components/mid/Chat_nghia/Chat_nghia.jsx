import React from 'react'
import "./chat_nghia.css"
import ava_group from '../../../assets/group.png'
import phone from '../../../assets/phone-call.png'
import phone_vid from '../../../assets/video-camera-alt.png'
import send from '../../../assets/send_button.png'
import emoji from '../../../assets/happiness.png'
import menu from '../../../assets/menu-burger.png'
import mic from '../../../assets/microphone.png'
import image from '../../../assets/image-gallery.png'
import cam from '../../../assets/camera.png'
import nghia from '../../../assets/nghia_img.jpg'
import duy from '../../../assets/duy_img.jpg'
import ngoc from '../../../assets/ngoc_img.png'
import duc from '../../../assets/duc_img.jpg'
import phuong from '../../../assets/phuong_img.jpg'

import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

const Chat_nghia = () => {
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
          <img src={nghia} alt="" />
          <div className="user-status"></div>
          <div className="userDetails">
            <span>Nghia Nguyen</span>
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
          <div className="message__text">
          </div>
        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Today was one of those days that felt like it flew by, but at the same time, I feel like I accomplished so much. I spent the morning catching up on some reading for the book I've been working through. It's been a while since I gave myself time to read, and it felt really nice to sit in the sun with my coffee and just lose myself in the pages. In the afternoon, I had a long meeting at work. It wasn’t particularly interesting, but we finally made some progress on our project. I’m proud of how I’ve been handling the extra responsibilities lately. I still feel overwhelmed at times, but I’m learning to take things one step at a time. Tonight, I plan to relax with a movie and give myself a break from everything. I deserve it.
            </p>
            <div className="date">
              <span>8 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              Wow, what a crazy day! I had back-to-back meetings from the moment I walked into the office until lunch. It felt like I barely had time to breathe. The project deadline is looming, and everyone seems to be in panic mode. I managed to get a lot done, but there’s still so much left on my plate. After work, I rushed home to cook dinner—nothing fancy, just pasta and salad. I really need to find more time to relax. Tomorrow, I’m hoping for a less hectic day, but with this project, who knows? I’ll make sure to carve out a little time to go for a walk or do something for myself. I can’t let work consume everything
            </p>
            <div className="date">
              <span>6 minutes ago</span>
            </div>
          </div>

          <img src={nghia} alt="" />
        </div>

        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Today was a really great day! I woke up feeling refreshed and energized, which was a nice change. I went for a jog in the park, and the weather was perfect—cool with a slight breeze. It was exactly what I needed to clear my mind. After that, I spent most of the day working on my personal project. I’m really excited about how it's coming along. I even had a breakthrough with a problem that’s been bugging me for days. In the evening, I met up with some friends for dinner. We had such a good time catching up and laughing. I feel so lucky to have such supportive people around me. I’m ending the day feeling content and grateful.
            </p>
            <div className="date">
              <span>3 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>


        <div className="message own">
          {/* <img src={ava_group} alt="" /> */}
          <div className="messageText">
            <p>
              Today was pretty uneventful. I went to work, like usual, and spent most of the day answering emails and finishing up reports. Nothing too exciting, but I got through everything on my to-do list. After work, I came home, made a quick dinner, and watched a few episodes of my favorite show. It wasn’t the most productive evening, but I think I needed some time to unwind. I’ve been feeling a bit tired lately, so I’m planning to get to bed early tonight and hopefully wake up feeling refreshed tomorrow.
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

export default Chat_nghia