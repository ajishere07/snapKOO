import Header from "../components/header/Header";
import Main from "../components/home/Main";
import Sidebar from "../components/navigations/Sidebar";
import "../styles/home.css";
import { useEffect } from "react";
import { fetchUserData } from "../features/PROFILE_DATA/dataSlice";
import { useAppDispatch, useAppSelector } from "../reduxHooks/hooks";
import { authe } from "../features/AUTH/userAuthenticatedSlice";

const Home = () => {
  const userAuth = useAppSelector(authe);

  return (
    <div className="homeContainer homeGrid">
      <Sidebar />
      <div className="mainContainer">
        <Header pageTitle="Home" />
        <Main />
      </div>
    </div>
  );
};

export default Home;
