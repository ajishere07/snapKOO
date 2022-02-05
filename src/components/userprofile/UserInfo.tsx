import React from "react";
import { useAppSelector } from "../../reduxHooks/hooks";
import headerImg from "../../assets/images/headerimg.png";

import "../../styles/UserProfile/UserInfo.css";
const UserInfo = () => {
  const userData = useAppSelector((state) => state.data.userData);

  return (
    <div className="profileContainer">
      <img src={headerImg} alt="header img" className="headerImage" />
      <div className="userProfileImg">
        <img
          src="https://variety.com/wp-content/uploads/2021/08/The-Batman-Robert-Pattinson.jpg"
          className="profileimage"
          alt="img"
        />
        <button>Edit Profile</button>
      </div>
      <div className="userBio">
        <p>{userData.name}</p>
        <small>@{userData.username}</small>
      </div>
    </div>
  );
};

export default UserInfo;
