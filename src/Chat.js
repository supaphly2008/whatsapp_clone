import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import database from "./firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    // select rooms collection with a document {roomId} and get the data of the selected id
    database
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
  }, [roomId]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />
        <div className="chat__header-info">
          <h3>{roomName}</h3>
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
          <input value={input} onChange={onInputChange} placeholder="Type a message..." type="text" />
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
