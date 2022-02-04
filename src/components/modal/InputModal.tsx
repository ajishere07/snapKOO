import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { FC } from "react";
import "../../styles/InputModal.css";
import { useAppDispatch } from "../../reduxHooks/hooks";
import { closeModal } from "../../features/MODAL/modalSlice";
type Props = {
  showModal: boolean;
};

const InputModal: FC<Props> = ({ showModal }) => {
  const dispatch = useAppDispatch();

  const closeModalFun = () => {
    dispatch(closeModal(false));
  };
  return (
    <Modal open={showModal} onClose={closeModalFun}>
      <div className="modalContainer">
        <div className="userAvatar">
          <img
            src="https://variety.com/wp-content/uploads/2021/08/The-Batman-Robert-Pattinson.jpg"
            alt="img"
          />
        </div>
        <div className="inputContainer">
          <textarea
            typeof="text"
            rows={4}
            cols={25}
            placeholder="What's Happening?"
          />
         
          <button>post</button>
        </div>
      </div>
    </Modal>
  );
};

export default InputModal;
