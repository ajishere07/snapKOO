import { SearchIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import { auth } from "../../configuration/firebase";
import { signOut } from "firebase/auth";
import "../../styles/header.css";
import { useAppSelector } from "../../reduxHooks/hooks";
import { useNavigate } from "react-router";
interface Props {
  pageTitle: string;
}
const Header: FC<Props> = ({ pageTitle }) => {
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.data.userData);
  return (
    <div className="headerContainer">
      <div className="header">
        <img
          className="avatar"
          src="https://variety.com/wp-content/uploads/2021/08/The-Batman-Robert-Pattinson.jpg"
          alt="img"
          onClick={() => navigate(`/${userData.username}`)}
        />

        <h1 onClick={async () => await signOut(auth)}>{pageTitle}</h1>
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
