import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://www.freeiconspng.com/uploads/whatsapp-logo-background-29.png" alt="" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
