import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import fakeAuth from "./fakeAuth";
import s from './Form.module.css'

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  let { from } = location.state || { from: { pathname: "/" } };

  let login = (e) => {
    if(handleValidation) {
        const details = {
          'username' : name,
          'mobile' : mobile,
      }
      
      fakeAuth.authenticate(() => {
        history.replace(from);
        localStorage.setItem("username", name)
        localStorage.setItem("mobile", mobile)
      });
    }
  };
  function handleValidation () {
    let formIsValid = true;
    let errors = ''
    let user = localStorage.getItem("username")
    if(user){
        formIsValid = false;
        alert("Cannot be empty");
     }
    if(typeof user !== "undefined") {
        if(user.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors = "name is invalid";
        }
    } 
    return formIsValid;
  }

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
      <input className={s.input} onChange={e => setName(e.target.value)} />
      <input className={s.input} onChange={e => setMobile(e.target.value)} />
      <button className={s.button} onClick={login}>ورود</button>
  </form>
  );
}

export default LoginPage;