"use client";
import axios from "axios";
import { useState } from "react";
import { formValidation } from "@app/registration/formValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login(prop) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginSubmit = async () => {
    const formData = {
      username,
      password,
    };
    try {
      setLoading(true);
      await formValidation.validate(formData, { abortEarly: false });
      let result = await axios.post(`/api/login`, {
        username,
        password,
      });
      result.data.msg
        ? (prop.setTokenVerifierTrigger(prop.tokenVerifierTrigger + 1),
          // localStorage.setItem("out", false),
          prop.setUserId(result.data.userId))
        : setLoginError(result.data.error);
      setPasswordError(""), setUsernameError("");
    } catch (error) {
      error.inner
        ? error.inner[0].path === "username"
          ? (setUsernameError(error.inner[0].message), setPasswordError(""))
          : (setPasswordError(error.inner[0].message), setUsernameError(""))
        : (setPasswordError(""), setUsernameError(""));
    } finally {
      setLoading(false);
    }
  };

  function clickOnEnterPress(e) {
    e.key === "Enter" ? loginSubmit() : null;
  }

  return (
    // <div className="flex items-center w-5/12 h-full custom-bg">
    <div className="flex flex-col justify-evenly w-fit h-fit py-10* ps-8 pe-12 text-xl font-sans w-fit borderl-2 border-gray-500 w-full h-[90] gap-10">
      <h1 className="text-main-blue text-5xl pb-5 font-bold">Login</h1>

      <div className="flex flex-col bg-blue-300* justify-center">
        <input
          className="ps-6 pe-12 py-3"
          placeholder="Username"
          type="text"
          onChange={(e) => setName(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">
          {usernameError.includes("username")
            ? usernameError.replace("username", "Username")
            : usernameError}
        </p>
        <div className="flex w-full justify-end items-center">
          <input
            name="showPass"
            placeholder="Password"
            className="ps-6 pe-12 py-3 w-full"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={clickOnEnterPress}
          />
          <div
            className="absolute float-end mx-5 hover:cursor-pointer text-2xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <p className="text-red-500 p-2 px-3 text-lg">
          {passwordError
            ? passwordError.includes("password")
              ? passwordError.replace("password", "Password")
              : passwordError
            : loginError}
        </p>
      </div>

      <button
        className={`${
          loading ? "bg-gray-600" : "bg-main-blue"
        } text-white mx-0 p-3 font-[500]`}
        onClick={loginSubmit}
      >
        SUBMIT
      </button>
    </div>
    // </div>
  );
}

export default Login;
