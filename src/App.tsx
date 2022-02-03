import React, { FC } from "react";
import "./App.css";
import KooButtonMobile from "./components/home/KooButtonMobile";
import InputModal from "./components/modal/InputModal";
import BottomNavigations from "./components/navigations/BottomNavigations";

import Home from "./pages/Home";
import { useAppSelector } from "./reduxHooks/hooks";
const App: FC = () => {
  const modal = useAppSelector((state) => state.modal.showModal);
  return (
    <div className="App">
      <Home />
      <InputModal showModal={modal} />
      <BottomNavigations />
      <KooButtonMobile />
    </div>
  );
};

export default App;
