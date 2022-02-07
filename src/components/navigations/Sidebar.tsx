import React from "react";
import "../../styles/sidebar.css";
import { HomeIcon, BellIcon, UserCircleIcon } from "@heroicons/react/solid";
import Logo from "../../assets/images/BrandLogo.png";
import "../../styles/sidebar.css";
import { useAppDispatch, useAppSelector } from "../../reduxHooks/hooks";
import { signOut } from "firebase/auth";
import { openModalBox } from "../../features/MODAL/modalSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../../configuration/firebase";
import { signOutUser } from "../../firebaseMethods/firebaseCRUD";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.data.userData);
  const openModal = (): void => {
    dispatch(openModalBox(true));
  };
  return (
    <aside className="sidebarContainer">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="logo" />
      </div>

      <div className="navTabs">
        <div className="tab" onClick={() => navigate("/home")}>
          <HomeIcon className="icon" />
          <span className="tabTitle">Home</span>
        </div>
        <div className="tab">
          <BellIcon className="icon" />
          <span className="tabTitle">Notifications</span>
        </div>
        <div className="tab" onClick={() => navigate(`/${userData.username}`)}>
          <UserCircleIcon className="icon" />
          <span className="tabTitle">Profile</span>
        </div>
        <button className="btn" onClick={openModal}>
          Koo
        </button>
        <button className="btn" onClick={signOutUser}>
          Sign Out
        </button>
      </div>
      <div className="userAuthCard">{/*TODO: avatar, name, username */}</div>
    </aside>
  );
};

export default Sidebar;
