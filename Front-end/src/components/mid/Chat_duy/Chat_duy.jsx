import React from 'react'
import "./chat_duy.css"
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


import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

const Chat_duy = () => {
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
          <img src={duy} alt="" />
          <div className="user-status"></div>
          <div className="userDetails">
            <span>Nguyen Dang Duy</span>
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
          <img src={duy} alt="" />
          <div className="messageText">
            <p>
              Hey Nghia, I wanted to catch up with you about the new project we were assigned to this week. I’ve been going over the initial brief, and I have to say, it seems a bit more complex than I originally thought. What’s your take on it so far?
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
              Yeah, I was thinking the same thing, Duy. At first glance, it seemed straightforward, but after reviewing the requirements in detail, I realized there’s a lot of moving parts involved. We’re going to need to coordinate with multiple departments, and the deadlines are pretty tight. Have you started mapping out how we should approach it?
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
              I’ve started drafting a rough plan, but I haven’t gotten too far yet. My first thought is that we need to break the project down into smaller, more manageable phases. I was thinking we could tackle the research and data gathering first, then move on to the design and development phase. That way, we’re not trying to juggle everything all at once. What do you think of that approach?
            </p>
            <div className="date">
              <span>7 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="message own">
          <div className="messageText">
            <p>
              That sounds like a solid plan to me. Starting with the research phase is smart since it’ll give us a clear understanding of what each department needs. I think we should also set up weekly check-ins with the key stakeholders to make sure everyone is aligned throughout the process. It’ll help us catch any potential issues early on. Have you had a chance to talk to anyone from the marketing or IT teams yet?
            </p>
            <div className="date">
              <span>6 minutes ago</span>
            </div>
          </div>

          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={duy} alt="" />
          <div className="messageText">
            <p>
              Not yet, but I was planning to reach out to them later today. From what I’ve seen, the IT team will play a crucial role in the later stages when we start implementing the technical solutions. And marketing, of course, needs to be involved from the start so that the final product aligns with their campaign goals. I’ll schedule a meeting with both teams to make sure we’re all on the same page. Do you want to join that meeting?
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
              Definitely. I’d like to be there, especially for the marketing discussion. I think their input will really shape how we move forward with the design phase. Also, I’ve been thinking about the budget – we should probably have a conversation with finance early on to make sure we’re not overextending our resources. With all these different departments involved, costs could add up quickly.
            </p>
            <div className="date">
              <span>3 minutes ago</span>
            </div>
          </div>
          <img src={nghia} alt="" />
        </div>

        <div className="message">
          <img src={duy} alt="" />
          <div className="messageText">
            <p>
              Good point. I hadn’t thought about the budget yet, but we definitely need to keep it in check. I’ll reach out to finance after our meeting with IT and marketing. Once we have a clearer picture of the scope, I think we’ll be in a better position to draft a detailed timeline. I’m hoping we can keep things on track, but with a project of this size, there’s always a risk of delays.
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
              Yeah, delays are something we’ll need to watch out for. I think if we stay proactive and keep communication open with all the teams, we should be able to manage any roadblocks that come up. And once we have the timeline in place, we can adjust as necessary. I’m feeling pretty good about the plan so far, though. It’s definitely going to be challenging, but I think we’re up for it.
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

export default Chat_duy