import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    console.log("test");
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
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
