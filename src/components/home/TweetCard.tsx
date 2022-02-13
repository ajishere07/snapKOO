import React, { FC, useEffect, useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "@firebase/firestore";
import { db } from "../../configuration/firebase";
interface Props {
  content: string;

  userId: string;

  sharedAt: any;
}

const TweetCard: FC<Props> = ({ content, userId, sharedAt }) => {
  const [userTweetInfo, setUserTweetInfo] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async (userId: string) => {
      const usersCollectionRef = collection(db, "users");

      const queryObject = query(
        usersCollectionRef,
        where("uid", "==", `${userId}`)
      );
      const querySnapshot = await getDocs(queryObject);
      let data = {};
      querySnapshot.forEach((doc) => {
        data = doc.data();
      });

      setUserTweetInfo(data);
    };
    fetchUserInfo(userId);
  }, []);

  if (!userTweetInfo) return <p>Tweets loading</p>;
  return (
    <div className="tweetCard">
      <img src={userTweetInfo.profileImg} alt="img" />

      <div className="tweetContentContainer">
        <div className="nameContainer">
          <p className="name">
            <b>{userTweetInfo.name}</b>
          </p>
          <span className="username">@{userTweetInfo.username}</span>
          <DotsHorizontalIcon className="dotsIcon" />
        </div>
        <span className="tweetContent">{content}</span>
      </div>
    </div>
  );
};

export default TweetCard;
