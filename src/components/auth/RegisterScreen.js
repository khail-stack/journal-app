import React from "react";
import { useForm } from "./../../hooks/useForm";

import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../../actions/uiAction";
import { startRegisterWithEmailPassworName } from "../../actions/authAction";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  console.log(msgError);
  const [formValues, handleInputChange] = useForm({
    name: "Khail",
    email: "kmogollon1507@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    const isFormValid = () => {
      if (name.trim().length === 0) {
        dispatch(setError("Name is required"));
        return false;
      } else if (!validator.isEmail(email)) {
        dispatch(setError("Email is not valid"));
        return false;
      } else if (password !== password2 || password.length < 5) {
        dispatch(
          setError(
            "Password should be least at 6 characters and match each ofter"
          )
        );
        return false;
      }
      dispatch(removeError());
      return true;
    };

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassworName(email, password, name));
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
