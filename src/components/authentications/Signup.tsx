import React, { FC, useState } from "react";
import Input from "./Input";

import Button from "./Button";
import HorizontalLine from "./HorizontalLine";
import Logo from "../../assets/images/BrandLogo.png";
import { NavigateFunction, useNavigate } from "react-router";
import { renderSignInPage } from "../../features/AUTH/renderPageSlice";
import { useAppDispatch } from "../../reduxHooks/hooks";
import { auth, db } from "../../configuration/firebase";
import { doc, setDoc, Timestamp } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { autheticated } from "../../features/AUTH/userAuthenticatedSlice";
import defaultImg from "../../assets/images/DefaultProfileImg.png";
import defaultHeaderImg from "../../assets/images/headerimg.png";
const Signup: FC = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

  const signupUser = async (): Promise<any> => {
    if (!name || !email || !password || !username) {
      alert("fill all the fields first");
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        password,
        username,
        createdAt: Timestamp.fromDate(new Date()),
        profileImg: null,
        headerImg: null,
      });
      setName("");
      setUsername("");
      setPassword("");
      setEmail("");

      navigate("/home");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const a = () => {
    console.log("clicked");
  };
  return (
    <div className="containerA">
      <div className="branding">
        <img src={Logo} alt="logo" className="w-28 mx-auto" />
      </div>
      {/* TODO adding a font family for the brand snapphotos */}
      <h1 className="tagline">What's Happening!</h1>
      <Input
        titleOfInput="Name"
        typeOfInput="text"
        placeholder="Enter your name"
        data={name}
        setData={setName}
      />
      <Input
        titleOfInput="Username"
        typeOfInput="text"
        placeholder="Enter your username"
        data={username}
        setData={setUsername}
      />
      <Input
        titleOfInput="Email"
        typeOfInput="text"
        placeholder="Enter your email"
        data={email}
        setData={setEmail}
      />
      <Input
        titleOfInput="Password"
        typeOfInput="password"
        placeholder="Enter your password"
        data={password}
        setData={setPassword}
      />
      <Button buttonName="Sign up" fun={signupUser} />
      {/* <HorizontalLine contentBetweenLine="Sign up using" /> */}
      {/* TODO: Google sign in option */}

      <p className="footer">
        Already have an account &nbsp;
        <span
          className="hover:underline text-link  cursor-pointer"
          onClick={() => dispatch(renderSignInPage())}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
