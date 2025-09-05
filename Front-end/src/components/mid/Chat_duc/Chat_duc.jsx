import React from 'react'
import "./chat_duc.css"

import phone from '../../../assets/phone-call.png'
import phone_vid from '../../../assets/video-camera-alt.png'
import send from '../../../assets/send_button.png'
import emoji from '../../../assets/happiness.png'
import menu from '../../../assets/menu-burger.png'
import mic from '../../../assets/microphone.png'
import image from '../../../assets/image-gallery.png'
import cam from '../../../assets/camera.png'
import nghia from '../../../assets/nghia_img.jpg'
import duc from '../../../assets/duc_img.jpg'


import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

const Chat_duc = () => {
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
          <img src={duc} alt="" />
          <div className="user-status"></div>
          <div className="userDetails">
            <span>Nguyen Minh Duc</span>
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
          <img src={duc} alt="" />
          <div className="messageText">
            <p>
              Hey Nghia, I’ve been thinking about doing something fun this weekend. I’ve had such a busy week, and I feel like I need to get out and do something to clear my head. Do you have any plans already, or would you be up for joining me?
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
              I totally understand what you mean, Duc. My week has been pretty exhausting as well, and I’ve been craving some time outdoors. I didn’t have anything concrete planned yet, but I’ve been considering going on a hike up to that new trail in the hills. I’ve heard the views are amazing. What do you think? Or did you have something else in mind?
            </p>
            <div className="date">
              <span>8 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={duc} alt="" />
          <div className="messageText">
            <p>
              A hike sounds like a fantastic idea! I’ve actually been wanting to try out that trail ever since I saw some photos online. It looks so peaceful and the perfect place to unwind. Plus, I could really use the exercise. How long do you think the hike will take? I wouldn’t mind spending most of the day outdoors, but I also wouldn’t mind hitting the beach later if we have time.
            </p>
            <div className="date">
              <span>7 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              That’s a great combination! The hike is supposed to take about three or four hours, depending on our pace. I think if we start early enough, we can finish by late morning and then have plenty of time to relax at the beach afterward. It would be the perfect way to spend the day – some activity in the morning and then unwinding by the ocean in the afternoon. What do you think about meeting at my place around 6:30 AM? That way, we can start the hike before it gets too hot.
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
              That sounds perfect! I’m definitely up for an early start, especially if it means avoiding the midday heat. I’ll pack some light snacks, maybe some energy bars and fruit for the hike, and we can grab lunch on the way to the beach. I’ll also make sure to bring plenty of water and sunscreen. Is there anything else you think we’ll need for the hike or the beach? I want to make sure we’re fully prepared.
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
              I think you’ve got it all covered. I’ll bring my camera to capture some of the scenic views during the hike, and maybe we can take some pictures at the beach too. I’ll also pack a small first-aid kit, just in case. And don’t forget your swimsuit for the beach! I’ve been meaning to take a swim after the hike, so that will be a nice way to cool down. I think we’re all set for a pretty awesome day!
            </p>
            <div className="date">
              <span>3 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={duc} alt="" />
          <div className="messageText">
            <p>
              I’m really looking forward to it now! It’s been a while since I’ve done something like this, and I can’t wait to enjoy the outdoors. Meeting at 6:30 sounds perfect, so I’ll see you bright and early at your place. This is going to be a great weekend adventure. Thanks for organizing it, Mark!
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
              No problem at all, Duc. I’m excited too! It’ll be nice to catch up and enjoy some nature at the same time. I’ll see you Saturday morning then. Don’t worry, I’ll make sure the coffee’s ready when you arrive!
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

export default Chat_duc