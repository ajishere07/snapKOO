import React from "react";
import { useAppDispatch, useAppSelector } from "../../reduxHooks/hooks";
import headerImg from "../../assets/images/headerimg.png";
import profileImg from "../../assets/images/DefaultProfileImg.png";
import "../../styles/UserProfile/UserInfo.css";
import { editModalShow } from "../../features/PROFILE_DATA/editModal";
import EditModal from "./EditModal";
import TweetCard from "../home/TweetCard";
const UserInfo = () => {
  const userData = useAppSelector((state) => state.data.userData);
  const edit = useAppSelector((state) => state.edit.showEditModal);
  const userKoo = useAppSelector((state) => state.koos.userKoo);
  const dispatch = useAppDispatch();

  console.log(userKoo);
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
      <div className="koossContainer">
        <h2>Your Koo's</h2>
        {userKoo.map((koo: any) => (
          <TweetCard
            key={koo.id}
            content={koo.content}
            id={koo.id}
            name={koo.name}
            username={koo.username}
            profileImg={koo.profileImg}
            sharedAt={koo.sharedAt}
            userId={koo.userId}
          />
        ))}
      </div>
      <EditModal />
    </div>
  );
};

export default UserInfo;
