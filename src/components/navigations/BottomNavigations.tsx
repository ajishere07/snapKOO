import React from "react";
import {
  HomeIcon,
  BellIcon,
  SearchIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import "../../styles/BottomNavigationTab/BottomNavigationTab.css";
import { useNavigate } from "react-router";
import { signOutUser } from "../../firebaseMethods/firebaseCRUD";

const BottomNavigations = () => {
  const navigate = useNavigate();
  return (
    <div className="navContainer">
      <div className="navigations">
        <HomeIcon className="tabIcons" onClick={() => navigate("/home")} />
        <SearchIcon className="tabIcons" />
        <BellIcon className="tabIcons" />
        <LogoutIcon className="tabIcons" onClick={signOutUser} />
      </div>
    </div>
  );
};

export default BottomNavigations;
