import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import database from "./firebase";
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, name, id }) => {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    console.log(roomName);
    if (roomName) {
      // do something here with the db
      // save to db

      // add a new document inside rooms collection
      database.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return addNewChat ? (
    <div onClick={createChat} className="sidebar-chat">
      <h2>Add new chat</h2>
    </div>
  ) : (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar-chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
        <div className="sidebar-chat__info">
          <h2>{name}</h2>
          <p>last message...</p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarChat;
