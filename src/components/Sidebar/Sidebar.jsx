import React from "react";
import { Link, Outlet } from "react-router-dom";
import PlayList from "../../assets/list.png";
import "./Sidebar.css"
import VideoPlayList from '../../assets/vidlist.png'
import Library from "../../assets/vid-library.png"

function Sidebar() {
  return (
    <div>
      <nav className="sidebar__container">
        <div className="nav__details">
          <ul className="sidebar__list">
            <li className="sidebar__items">
              <i className="fa-solid fa-house"></i>
              <Link to="/">Home</Link>
            </li>
            <li className="sidebar__items">
              <img src={PlayList} alt="" />
              <Link to="/">Short</Link>
            </li>
            <li className="sidebar__items">
              <img src={VideoPlayList} alt="" />
              <Link to="/">Subscriptions</Link>
            </li>
            <li className="sidebar__items">
              <img src={Library} alt="" />
              <Link to="/">Library</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Sidebar;
