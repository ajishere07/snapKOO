import React from "react";
import SuggestionsAndnews from "./SuggestionsAndnews";
import Tweets from "./Tweets";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="main">
      <Tweets />
      <SuggestionsAndnews />
    </div>
  );
};

export default Main;
