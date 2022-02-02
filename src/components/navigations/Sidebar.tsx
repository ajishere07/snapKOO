import React from "react";
import "../../styles/sidebar.css";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Logo from "../../assets/images/BrandLogo.png";
import "../../styles/sidebar.css";
type Props = {};
const Sidebar = (props: Props) => {
  return (
    <aside className="sidebarContainer">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navTabs">
        <div className="tab">
          <HomeIcon className="icon" />
          <span className="tabTitle">Home</span>
        </div>
        <div className="tab">
          <HashtagIcon className="icon" />
          <span className="tabTitle">Explore</span>
        </div>
        <div className="tab">
          <BellIcon className="icon" />
          <span className="tabTitle">Notifications</span>
        </div>
        <div className="tab">
          <UserCircleIcon className="icon" />
          <span className="tabTitle">Profile</span>
        </div>
        <button className="btn">Tweet</button>
      </div>
      <div className="userAuthCard">{/*TODO: avatar, name, username */}</div>
    </aside>
  );
};

export default Sidebar;
