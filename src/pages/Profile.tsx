import Header from "../components/header/Header";
import Main from "../components/userprofile/MainPage";
import Sidebar from "../components/navigations/Sidebar";
import "../styles/home.css";
import { useAppSelector } from "../reduxHooks/hooks";
import { data } from "../features/PROFILE_DATA/dataSlice";
const Profile = () => {
  const userData = useAppSelector(data);
  console.log(userData);
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
