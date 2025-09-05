import React from 'react'
import "./chat_group.css"
import ava_group from '../../../assets/group.png'
import phone from '../../../assets/phone-call.png'
import phone_vid from '../../../assets/video-camera-alt.png'
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

const Chat_group = () => {
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
    <div className="chat-box">
      <div className="top">
        <div className="user">
          <img src={ava_group} alt="" />
          <div className="user-status"></div>
          <div className="userDetails">
            <span>Web application group</span>
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
              Hey guys! I've been thinking, it’s been a while since we all went on a trip together. How do you all feel about planning a weekend getaway? Maybe somewhere out of the city?
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
              That sounds like an amazing idea! I’ve been so caught up with work lately that I could really use a break. Do you have any place in mind?
            </p>
            <div className="date">
              <span>8 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={duy} alt="" />
          <div className="messageText">
            <p>
              Yes, same here! I would love a little escape. I’ve heard some friends talking about this cozy cabin near the mountains. It’s not too far, and the view is supposed to be stunning. Plus, it’s perfect for a weekend trip!
            </p>
            <div className="date">
              <span>7 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              A cabin sounds like a great choice! I’ve always wanted to do something like that. We could hike during the day and maybe have a bonfire at night. But when are we thinking of going? I’ve got some work deadlines coming up, so I’ll need to plan around those.
            </p>
            <div className="date">
              <span>6 minutes ago</span>
            </div>
          </div>

          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={duc} alt="" />
          <div className="messageText">
            <p>
              That sounds like so much fun! I love the idea of a cabin and a bonfire. We could make s'mores, too! As for the dates, maybe we could go next weekend? Would that work for everyone?
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
              Next weekend works for me. I could use some fresh air and relaxation, especially after how hectic this week has been. I think it’ll be nice to just unwind and spend some time in nature. Do we need to book the cabin in advance, or is it usually available?
            </p>
            <div className="date">
              <span>3 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={phuong} alt="" />
          <div className="messageText">
            <p>
              I think it’s best if we book it as soon as possible. These kinds of places tend to fill up fast, especially with the nice weather lately. I can check online and make the reservation if everyone’s on board.👍
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
              Thanks, Phuong! I’m totally in for next weekend. I can also help with the planning—like food, activities, and stuff. Should we make it a two-day trip, or maybe extend it to three days if everyone’s schedule allows?😊
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

export default Chat_group