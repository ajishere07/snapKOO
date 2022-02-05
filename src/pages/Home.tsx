import Header from "../components/header/Header";
import Main from "../components/home/Main";
import Sidebar from "../components/navigations/Sidebar";
import "../styles/home.css";
import { useEffect } from "react";
import { fetchUserData } from "../features/PROFILE_DATA/dataSlice";
import { useAppDispatch, useAppSelector } from "../reduxHooks/hooks";

const Home = () => {
  const userAuth = useAppSelector(
    (state) => state.userAuthentication.credential
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserData(userAuth.uid));
  }, [dispatch]);
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
