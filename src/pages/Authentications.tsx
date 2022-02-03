import { FC } from "react";
import Login from "../components/authentications/Login";
import Signup from "../components/authentications/Signup";
import Banner from "../assets/images/BrandBanner.png";
// import { useAppSelector } from "../reduxHooks/hooks";
import "../styles/AuthenticationStyles/authPage.css";
import "../styles/AuthenticationStyles/credentialsContainer.css";
import { useAppSelector } from "../reduxHooks/hooks";
import { renderBool } from "../features/AUTH/renderPageSlice";
const Authentications: FC = () => {
  // const renderPage = useAppSelector((state) => state.render.signInPage);
  const renderPage = useAppSelector(renderBool);

  // renderPage is a boolean which is responsible for
  // switching the signin And signup Page
  // const renderPage = useAppSelector(
  //   (state) => state.signinPage.renderSigninPage
  // );
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
