import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import fakeAuth from "./fakeAuth";
import s from "./Form.module.css";
import useForm from "./useForm";
import validate from "./LoginValidationRules";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const { t } = useTranslation();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const { values, errors, handleChange, handleSubmit } = useForm(
    print,
    validate,
    handleValidation
  );

  function print() {
    console.log(values);
  }

  function handleValidation() {
    let formIsValid = true;
    let user = localStorage.getItem("username");
    if (!user) {
      formIsValid = false;
      alert("Cannot be empty");
    }
    if (typeof user !== "undefined") {
      if (user.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        console.log("name is invalid");
      }
    }
    if (formIsValid) fakeAuth.authenticate(() => history.replace(from));
  }

  return fakeAuth.isAuthenticated ? (
    <button
      className={`${s.button} ${s.red}`}
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      {t("login.exit")}
    </button>
  ) : (
    <form className={s.form} onSubmit={handleSubmit}>
      <p>{t("login.alert")}</p>
      <input
        className={s.input}
        onChange={handleChange}
        placeholder={t("login.placeholder-name")}
        name="name"
        value={values.name || ""}
        required
      />
      <input
        className={s.input}
        onChange={handleChange}
        placeholder={t("login.placeholder-email")}
        name="email"
        value={values.email || ""}
        required
      />
      {errors.name && <p>{errors.name}</p>}
      {errors.email && <p>{errors.email}</p>}
      <button className={s.button}>{t("login.login")}</button>
    </form>
  );
}

export default LoginPage;
