import Input from "./Input";

import Button from "./Button";

import Logo from "../../assets/images/BrandLogo.png";
import { useAppDispatch } from "../../reduxHooks/hooks";
import { renderRegisterPage } from "../../features/AUTH/renderPageSlice";
import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../configuration/firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signinUser = async (): Promise<any> => {
    if (!email || !password) {
      alert("fill all the fields first");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("logged in");
      navigate("/home");
    } catch (err) {
      alert(err);
     
    }
  };
  
  return (
    <div className="containerA">
      <div className="branding">
        <img src={Logo} alt="logo" className="w-28 mx-auto" />
      </div>
      <h1 className="tagline">What's Happening!</h1>
      <Input
        titleOfInput="Email"
        typeOfInput="email"
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
      <Button buttonName="Sign in" fun={signinUser} />

      {/* <HorizontalLine contentBetweenLine="Login via GOOGLE" /> */}
      {/* TODO: Google sign in option */}
      <p className="footer">
        Don't Have An Account &nbsp;
        <span className="link" onClick={() => dispatch(renderRegisterPage())}>
          Create An Account
        </span>
      </p>
    </div>
  );
};

export default Login;
