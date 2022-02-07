import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import headerImg from "../../assets/images/headerimg.png";
import profileImg from "../../assets/images/DefaultProfileImg.png";
import { closeEditModal } from "../../features/PROFILE_DATA/editModal";
import { useAppDispatch, useAppSelector } from "../../reduxHooks/hooks";
import "../../styles/UserProfile/UserInfo.css";
import "../../styles/UserProfile/EditUserInfo.css";
import { CameraIcon } from "@heroicons/react/solid";
import {
  savingHeaderChange,
  savingProfileImgChange,
} from "../../firebaseMethods/firebaseCRUD";
import { useNavigate } from "react-router";
const EditModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.data.userData);
  const edit = useAppSelector((state) => state.edit.showEditModal);

  const [headerImgAsFile, setHeaderImgAsFile] = useState<any>(null);
  const [headerImgAsURL, setHeaderImgAsURL] = useState<any>(null);
  const [profileImgAsFile, setProfileImgAsFile] = useState<any>(null);
  const [profileImgAsURL, setProfileImgAsURL] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);
  const storeHeaderImg = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setHeaderImgAsFile(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        setHeaderImgAsURL(readerEvent?.target?.result);
      };
    }
  };
  const storeProfileImg = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setProfileImgAsFile(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        setProfileImgAsURL(readerEvent?.target?.result);
      };
    }
  };
  console.log(profileImgAsFile);
  return (
    <Modal open={edit} onClose={() => dispatch(closeEditModal())}>
      <div className="profileContainer editProfileContainer">
        <div className="headerImgContainer">
          <img
            src={headerImgAsURL ? headerImgAsURL : headerImg}
            alt="header img"
            className="headerImage editHeaderImage"
          />
          <div className="inputFileContainer">
            <label>
              <CameraIcon className="iconHeader" />
              <input type="file" id="file" onChange={storeHeaderImg} />
            </label>
          </div>
        </div>

        <div className="userProfileImg">
          <div className="editProfileImage">
            <img
              src={profileImgAsURL ? profileImgAsURL : profileImg}
              className="profileimage "
              alt="img"
            />
            <div className="inputFileContainer">
              <label>
                <CameraIcon className="iconHeader " />
                <input type="file" id="file" onChange={storeProfileImg} />
              </label>
            </div>
          </div>
          <button
            onClick={() => {
              if (profileImgAsFile || headerImgAsFile) {
                setLoading(true);
                savingProfileImgChange(profileImgAsFile, userData, setLoading);
                savingHeaderChange(headerImgAsFile, userData, setLoading);
              }
            }}
          >
            {loading ? `Saving Changes` : `Save Changes`}
          </button>
        </div>
        <div className="userBio">
          <p>{userData.name}</p>
          <small>@{userData.username}</small>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
