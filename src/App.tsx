import React, { FC, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import "./App.css";
import KooButtonMobile from "./components/home/KooButtonMobile";
import InputModal from "./components/modal/InputModal";
import BottomNavigations from "./components/navigations/BottomNavigations";
import Authentications from "./pages/Authentications";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { useAppDispatch, useAppSelector } from "./reduxHooks/hooks";
import NoRouteExist from "./routes/NoRouteExist";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Header from "./components/header/Header";
const App: FC = () => {
  const location = useLocation();

  const modal = useAppSelector((state) => state.modal.showModal);
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Authentications />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
        </Route>

        <Route path="*" element={<NoRouteExist />} />
      </Routes>
      <InputModal showModal={modal} />
      {location.pathname !== "/auth" && (
        <>
          <BottomNavigations />
          <KooButtonMobile />
        </>
      )}
    </div>
  );
};

export default App;
