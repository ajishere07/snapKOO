import Header from "../components/header/Header";
import Main from "../components/home/Main";
import Sidebar from "../components/navigations/Sidebar";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="homeContainer homeGrid">
      <Sidebar />
      <div className="mainContainer">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
