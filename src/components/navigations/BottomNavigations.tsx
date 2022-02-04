import React from "react";
import { HomeIcon, BellIcon, SearchIcon } from "@heroicons/react/solid";
import "../../styles/BottomNavigationTab/BottomNavigationTab.css";


const BottomNavigations = () => {
  return (
    <div className="navContainer">
      <div className="navigations">
        <HomeIcon className="tabIcons" />
        <SearchIcon className="tabIcons" />
        <BellIcon className="tabIcons" />
      </div>
    </div>
  );
};

export default BottomNavigations;
