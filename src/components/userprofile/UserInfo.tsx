import React from "react";
import { useAppDispatch, useAppSelector } from "../../reduxHooks/hooks";
import headerImg from "../../assets/images/headerimg.png";
import profileImg from "../../assets/images/DefaultProfileImg.png";
import "../../styles/UserProfile/UserInfo.css";
import { editModalShow } from "../../features/PROFILE_DATA/editModal";
import EditModal from "./EditModal";
const UserInfo = () => {
  const userData = useAppSelector((state) => state.data.userData);
  const edit = useAppSelector((state) => state.edit.showEditModal);

  const dispatch = useAppDispatch();

  console.log(edit);
  return (
    <div className="profileContainer">
      <img
        src={userData.headerImg ? `${userData.headerImg}` : headerImg}
        alt="header img"
        className="headerImage"
      />
      <div className="userProfileImg">
        <img
          src={userData.profileImg ? `${userData.profileImg}` : profileImg}
          className="profileimage"
          alt="img"
        />
        <button onClick={() => dispatch(editModalShow())}>Edit Profile</button>
      </div>
      <div className="userBio">
        <p>{userData.name}</p>
        <small>@{userData.username}</small>
      </div>
      <EditModal />
    </div>
  );
};

export default UserInfo;
