import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoginEmailPassword,
  startGoogleLogin,
} from "./../../actions/authAction";
import validator from "validator";
import { setError, removeError } from "../../actions/uiAction";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "kmogollon1507@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(email, password);
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    const isFormValid = () => {
      if (!validator.isEmail(email)) {
        dispatch(setError("Email is not valid"));
        return false;
      } else if (password.length < 5) {
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
      dispatch(startGoogleLogin(email, password));
    }
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
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
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
