import { useHistory } from 'react-router-dom';
import React from "react"
import fakeAuth from "./fakeAuth"
import s from "../../CSS.module/Form.module.css"

function AuthButton(props) {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <div>
            <form className={s.form}>
                        <input 
                            className={s.input} 
                            type="text"
                            placeholder="نام خود را وارد کنید" 
                        />
                        <input 
                            className={s.input} 
                            placeholder="شماره موبایل خود را وارد کنید" 
                        />                
            </form>  
            <button className={s.button} onClick={props.onClick}>
                ثبت شماره موبایل
            </button> 
        </div>
    );
}

export default AuthButton;