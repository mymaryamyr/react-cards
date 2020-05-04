import React from "react";
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import fakeAuth from "./fakeAuth"
import AuthButton from "./AuthButton"

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/basket" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>برای دیدن سبد خرید ابتدا باید وارد حساب کاربری شوید</p>
        <AuthButton onClick={login} />
      </div>
    );

}


export default LoginPage;