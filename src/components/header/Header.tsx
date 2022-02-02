import { SearchIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import "../../styles/header.css";
interface Props {}
const Header: FC<Props> = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <img
          className="avatar"
          src="https://variety.com/wp-content/uploads/2021/08/The-Batman-Robert-Pattinson.jpg"
          alt="img"
        />

        <h1>Home</h1>
        <div className="searchBoxContainer">
          <SearchIcon className="icon" />
          <input
            type="search"
            className="searchBox"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
