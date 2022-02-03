import React from "react";
import { PencilIcon } from "@heroicons/react/solid";
import "../../styles/KooButtonMobile/KooButton.css";
import { useAppDispatch } from "../../reduxHooks/hooks";
import { openModalBox } from "../../features/MODAL/modalSlice";
const KooButtonMobile = () => {
  const dispatch = useAppDispatch();
  const openModal = (): void => {
    dispatch(openModalBox(true));
  };
  return (
    <button className="button" onClick={openModal}>
      <PencilIcon className="kooicon" />
      <span>Koo</span>
    </button>
  );
};

export default KooButtonMobile;
