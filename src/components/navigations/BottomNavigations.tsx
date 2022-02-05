import React from "react";
import { HomeIcon, BellIcon, SearchIcon } from "@heroicons/react/solid";
import "../../styles/BottomNavigationTab/BottomNavigationTab.css";
import { useNavigate } from "react-router";

const BottomNavigations = () => {
  const navigate = useNavigate();
  return (
    <div className="navContainer">
      <div className="navigations">
        <HomeIcon className="tabIcons" onClick={() => navigate("/home")} />
        <SearchIcon className="tabIcons" />
        <BellIcon className="tabIcons" />
      </div>
    </div>
  );
};

export default BottomNavigations;
