import React, { FC } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
interface Props {
  content: string;
  name: string;
  id: string;
  profileImg?: string;
  userId: string;
  username: string;
  sharedAt: any;
}

const TweetCard: FC<Props> = ({
  content,
  name,
  id,
  profileImg,
  userId,
  username,
  sharedAt,
}) => {
  return (
    <div className="tweetCard">
      <img src={profileImg} alt="img" />

      <div className="tweetContentContainer">
        <div className="nameContainer">
          <p className="name">
            <b>{name}</b>
          </p>
          <span className="username">@{username}</span>
          <DotsHorizontalIcon className="dotsIcon" />
        </div>
        <span className="tweetContent">{content}</span>
      </div>
    </div>
  );
};

export default TweetCard;
