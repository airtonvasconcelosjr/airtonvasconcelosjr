import React from 'react';
import ToolIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./Sidebar.css";
import UserProfile from './UserProfile';


function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
            <div className="sidebar-header-img">
                <img src="" alt="" />
            </div>
            <div className="sidebar-header-btn">
                <ToolIcon />
                <InsertCommentIcon />
                <MoreVertIcon />

            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-search-input">
                <SearchIcon />
                <input type="text" name="search" placeholder="Search..." />
            </div>
        </div>
        <div className="sidebar-chat-list">
            <UserProfile name="Neymar Jr." photoURL ="./ney.png" />
            <UserProfile name ="Leo Messi" photoURL ="./ancaramessi.png" />
            <UserProfile name ="Serri Sete" photoURL ="./cr7.png" />
        </div>

    </div>
  )
}

export default Sidebar