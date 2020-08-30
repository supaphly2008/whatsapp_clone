import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
import database from "./firebase";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = database.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      {/* sidebar header */}
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__header--icons">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* sidebar search input */}
      <div className="sidebar__search">
        <div className="sidebar__search__container">
          <SearchIcon />
          <input placeholder="Search or start new chat"></input>
        </div>
      </div>
      {/* sidebar chatroom list */}
      <SidebarChat addNewChat />
      <div className="sidebar__chats">
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
