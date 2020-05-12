import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import fakeAuth from "./fakeAuth";
import s from './Form.module.css'

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
      localStorage.setItem("username", "me")
    });
  };
  return (fakeAuth.isAuthenticated) ? (
    <button
      className={`${s.button} ${s.red}`} 
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      خروج از حساب کاربری
    </button>
  ) : (
    <form className={s.form}>
      <p>لطفا وارد حساب کاربری شوید.</p>
      <input className={s.input} />
      <input className={s.input}/>
      <button className={s.button} onClick={login}>ورود</button>
  </form>
  );
}

export default LoginPage;