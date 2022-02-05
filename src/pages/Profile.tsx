import Header from "../components/header/Header";
import Main from "../components/userprofile/MainPage";
import Sidebar from "../components/navigations/Sidebar";
import "../styles/home.css";
import { useAppSelector } from "../reduxHooks/hooks";

const Profile = () => {
  const userData = useAppSelector((state) => state.data.userData);
  return (
    <div className="homeContainer homeGrid">
      <Sidebar />
      <div className="mainContainer">
        <Header pageTitle={userData.name} />
        <Main />
      </div>
    </div>
  );
};

export default Profile;
