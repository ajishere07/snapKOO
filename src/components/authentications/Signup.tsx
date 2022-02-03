import React, { FC, useState } from "react";
import Input from "./Input";

import Button from "./Button";
import HorizontalLine from "./HorizontalLine";
import Logo from "../../assets/images/BrandLogo.png";
import { NavigateFunction, useNavigate } from "react-router";
import { renderSignInPage } from "../../features/AUTH/renderPageSlice";
import { useAppDispatch } from "../../reduxHooks/hooks";
const Signup: FC = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const [demo] = useState<string>("adfd");

  const navigate: NavigateFunction = useNavigate();

  // const signupUser = async (): Promise<any> => {
  //   if (!name || !email || !password) {
  //     alert("fill all the fields first");
  //   }
  //   try {
  //     const result = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     console.log(result);
  //     await setDoc(doc(db, "users", result.user.uid), {
  //       uid: result.user.uid,
  //       name,
  //       email,
  //       password,
  //       createdAt: Timestamp.fromDate(new Date()),
  //     });

  //     dispatch(() => {
  //       addEmail("");
  //       addUsername("");
  //       addPassword("");
  //     });
  //     navigate("/");
  //   } catch (err) {
  //     alert(err);
  //     console.log(err);
  //   }
  // };
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
      <Button buttonName="Sign up" fun={a} />
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
