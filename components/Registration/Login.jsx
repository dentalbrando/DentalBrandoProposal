"use client";
import axios from "axios";
import { useState } from "react";
import { formValidation } from "@app/registration/formValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setCookies } from "@app/registration/auth";

function Login(prop) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginSubmit = async () => {
    console.log("loginSubmit");
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
        ? (setCookies(result.data.msg),
          prop.setTokenVerifierTrigger(prop.tokenVerifierTrigger + 1),
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
    // <div className="flex flex-col p-5 bg-blue-700 text-xl">
    <div className="flex flex-col justify-center w-fit p-10 bg-blue-300 text-xl font-sans rounded-2xl w-fit">
      <h1 className="text-6xl pb-10 font-bold text-orange-500">Login</h1>
      {/* <label className="p-3">user name</label> */}
      <input
        className="ps-6 pe-12 py-3 rounded-full hover:outline-orange-500 focus:outline-orange-500"
        placeholder="enter user name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        onKeyUp={clickOnEnterPress}
      />
      <p className="text-red-500 p-2 text-base">{usernameError}</p>
      {/* <label className="p-3">password</label> */}
      <div className="flex w-fit justify-end items-center hover:outline-orange-500 focus:outline-orange-500">
        <input
          name="showPass"
          placeholder="enter password"
          className="ps-6 pe-12 py-3 w-full rounded-full hover:outline-orange-500 focus:outline-orange-500"
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
      <p className="text-red-500 p-2 text-base">
        {passwordError ? passwordError : loginError}
      </p>
      <button
        className={`mt-3 mx-0 p-2 ${
          loading
            ? "bg-gray-500"
            : "bg-orange-500 hover:bg-white hover:text-orange-500"
        } text-white rounded-3xl`}
        onClick={loginSubmit}
      >
        submit
      </button>
    </div>
  );
}

export default Login;
