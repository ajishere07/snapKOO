import React from "react";
import SuggestionsAndnews from "./SuggestionsAndnews";
import Tweets from "./Tweets";



const Main = () => {
  return (
    <div className="main">
      <Tweets />
      <SuggestionsAndnews />
    </div>
  );
};

export default Main;
