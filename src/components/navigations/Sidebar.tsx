import React from "react";
import "../../styles/sidebar.css";
import { HomeIcon, BellIcon, UserCircleIcon } from "@heroicons/react/solid";
import Logo from "../../assets/images/BrandLogo.png";
import "../../styles/sidebar.css";
import { useAppDispatch } from "../../reduxHooks/hooks";
import { openModalBox } from "../../features/MODAL/modalSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const openModal = (): void => {
    dispatch(openModalBox(true));
  };
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
          <BellIcon className="icon" />
          <span className="tabTitle">Notifications</span>
        </div>
        <div className="tab">
          <UserCircleIcon className="icon" />
          <span className="tabTitle">Profile</span>
        </div>
        <button className="btn" onClick={openModal}>
          Koo
        </button>
      </div>
      <div className="userAuthCard">{/*TODO: avatar, name, username */}</div>
    </aside>
  );
};

export default Sidebar;
