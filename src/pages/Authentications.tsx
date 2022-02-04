import { FC } from "react";
import Login from "../components/authentications/Login";
import Signup from "../components/authentications/Signup";
import Banner from "../assets/images/BrandBanner.png";

import "../styles/AuthenticationStyles/authPage.css";
import "../styles/AuthenticationStyles/credentialsContainer.css";
import { useAppSelector } from "../reduxHooks/hooks";
import { renderBool } from "../features/AUTH/renderPageSlice";
const Authentications: FC = () => {
  const renderPage = useAppSelector(renderBool);
  return (
    <>
      <main className="authPageContainer">
        <img src={Banner} alt="banner" className="banner" />
        {renderPage ? <Login /> : <Signup />}
      </main>
    </>
  );
};

export default Authentications;
