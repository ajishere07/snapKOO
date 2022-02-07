import { SearchIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import { auth } from "../../configuration/firebase";
import profileImg from "../../assets/images/DefaultProfileImg.png";
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
          src={userData.profileImg ? userData.profileImg : profileImg}
          alt="img"
          onClick={() => navigate(`/${userData.username}`)}
        />

        <h1>{pageTitle}</h1>
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
