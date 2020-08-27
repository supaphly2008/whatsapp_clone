import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    console.log("test");
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    console.log(roomName);
    if (roomName) {
      // do something here with the db
    }
  };
  return addNewChat ? (
    <div onClick={createChat} className="sidebar-chat">
      <h2>Add new chat</h2>
    </div>
  ) : (
    <div className="sidebar-chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar-chat__info">
        <h2>Room name</h2>
        <p>last message...</p>
      </div>
    </div>
  );
};

export default SidebarChat;
