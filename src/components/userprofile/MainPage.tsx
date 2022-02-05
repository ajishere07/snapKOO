import React, { FC } from "react";
import SuggestionsAndnews from "../home/SuggestionsAndnews";
import UserInfo from "./UserInfo";

const Main = () => {
  return (
    <div className="main">
      <UserInfo />
      <SuggestionsAndnews />
    </div>
  );
};

export default Main;
