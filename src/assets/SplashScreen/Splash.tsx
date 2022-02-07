import React from "react";
import mainImg from "../images/BrandLogo.png";
import "./Splash.css";
type Props = {};

const Splash = (props: Props) => {
  return (
    <div className="screenContainer">
      <img src={mainImg} alt="loading" />
    </div>
  );
};

export default Splash;
