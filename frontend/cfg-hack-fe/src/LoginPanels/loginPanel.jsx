import { GoArrowRight } from "react-icons/go";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { useEffect, useState } from "react";
export default function LoginPanel({ setUser, setRegistered }) {
  const [userName, setUserName] = useState(null);
  const [password, setPassWord] = useState(null);
  const handleSubmit = () => {
    const userCredentials = {
      username: userName,
      password: password,
    };
    axios
      .post("http://localhost:3003/api/login/", userCredentials)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        window.localStorage.setItem(
          "loggedUser",
          JSON.stringify(response.data)
        );
      });
  };
  return (
    <div className="login-panel">
      <div className="login-heading">Welcome Back</div>
      <div className="register-link">
        Don't Have An Account ? &nbsp;&nbsp;{" "}
        <span
          className="register-link-elem"
          onClick={() => {
            setRegistered(false);
          }}
        >
          Sign Up
        </span>
      </div>
      <div className="login-input-text">Username</div>
      <input
        type="text"
        className="login-input"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <div className="login-input-text">Password</div>
      <input
        type="password"
        className="login-input"
        value={password}
        onChange={(e) => {
          setPassWord(e.target.value);
        }}
      />
      <br />
      <div id="login-submit-container">
        <button id="login-submit" onClick={handleSubmit}>
          <GoArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
