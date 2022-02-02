import React from "react";
import "../../styles/tweets.css";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
type Props = {};

const Tweets = (props: Props) => {
  return (
    <div className="tweetsContainer">
      <div className="tweetCard">
        <img
          src="https://images.hindustantimes.com/img/2021/01/15/1600x900/Chris-Evans_1610686588905_1610686593226.jpg"
          alt="img"
        />

        <div className="tweetContentContainer">
          <div className="nameContainer">
            <p className="name">
              <b>Steve Rogers</b>
            </p>
            <span className="username">@steverogers</span>
            <DotsHorizontalIcon className="dotsIcon" />
          </div>
          <div className="tweetContent">I could do this all day</div>
        </div>
      </div>
      <div className="tweetCard">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-endgame-avengers-4-1559993083.jpg?crop=0.515xw:0.977xh;0.263xw,0.0231xh&resize=480:*"
          alt="img"
        />

        {/* tweet content */}
        <div className="tweetContentContainer">
          <div className="nameContainer">
            <p className="name">
              <b>Thor</b>
            </p>
            <span className="username">@thorodinson</span>
            <DotsHorizontalIcon className="dotsIcon" />
          </div>
          <div className="tweetContent">bring me thanos</div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
