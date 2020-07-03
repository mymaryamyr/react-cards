import React from "react";
import { useHistory, useLocation} from "react-router-dom";
import fakeAuth from "./fakeAuth";
import s from './Form.module.css';
import useForm from './useForm';
import validate from './LoginValidationRules';

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(print,validate);
  
  function print() {
    console.log(values);
  }

  let login = (e) => {
    e.preventDefault()
    if(handleValidation) {
      
      fakeAuth.authenticate(() => history.replace(from));
    }
  };
  function handleValidation () {
    let formIsValid = true;
    let user = localStorage.getItem("username")
    if(!user){
        formIsValid = false;
        alert("Cannot be empty");
     }
    if(typeof user !== "undefined") {
        if(user.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            console.log("name is invalid")
        }
    } 
    return formIsValid;
  }

  return (fakeAuth.isAuthenticated) ? (
    <button
      className={`${s.button} ${s.red}`} 
      onClick={() => {
        fakeAuth.signout(() => history.push("/home"));
      }}
    >
      خروج از حساب کاربری
    </button>
  ) : (
    <form className={s.form} onSubmit={handleSubmit}>
      <p>لطفا وارد حساب کاربری شوید.</p>
      <input 
        className={s.input} 
        onChange={handleChange} 
        placeholder="your name here..."
        name="name" 
        value={values.name || ''}
        required
      />
      <input 
        className={s.input} 
        onChange={handleChange} 
        placeholder="your email here..."
        name="email" 
        value={values.email || ''}
        required 
      />
      {errors.name && (
        <p>{errors.name}</p>
      )}
      {errors.email && (
        <p>{errors.email}</p>
      )}
      <button className={s.button} >ورود</button>
  </form>
  );
}

export default LoginPage;