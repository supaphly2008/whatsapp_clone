import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("send");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__header-info">
          <h3>Room name</h3>
          <p>last seen...</p>
        </div>

        <div className="chat__header-icons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__body-text ${false && "chat__body-text--reciever"}`}>
          <span className="chat__body-name">Terry Liao</span>
          Hey Guys
          <span className="chat__body-timestamp">18:34</span>
        </p>
        <p className={`chat__body-text ${true && "chat__body-text--reciever"}`}>
          <span className="chat__body-name">Terry Liao</span>
          Hey Guys
          <span className="chat__body-timestamp">18:34</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <form className="chat__footer-form">
          <input placeholder="Type a message..." type="text" />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
