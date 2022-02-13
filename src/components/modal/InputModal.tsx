import { Modal } from "react-responsive-modal";
import profileImg from "../../assets/images/DefaultProfileImg.png";
import { FC, useState } from "react";
import "../../styles/InputModal.css";
import { useAppDispatch, useAppSelector } from "../../reduxHooks/hooks";
import { closeModal } from "../../features/MODAL/modalSlice";
import { addTweet } from "../../firebaseMethods/firebaseCRUD";
type Props = {
  showModal: boolean;
};

const InputModal: FC<Props> = ({ showModal }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.data.userData);
  const closeModalFun = () => {
    dispatch(closeModal(false));
  };
  return (
    <Modal open={showModal} onClose={closeModalFun}>
      <div className="modalContainer">
        <div className="userAvatar">
          <img
            src={userData.profileImg ? `${userData.profileImg}` : profileImg}
            alt="img"
          />
        </div>
        <div className="inputContainer">
          <textarea
            typeof="text"
            rows={4}
            cols={25}
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
            placeholder="What's Happening?"
          />

          <button
            onClick={() => {
              if (content === "") {
                alert("post cannot be blank");
                return;
              }
              setLoading(true);
              addTweet(userData.uid, content, setLoading);
            }}
          >
            {loading ? `....` : `post`}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default InputModal;
