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
    console.log("login");
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
    <div className=" w-5/12 h-full custom-bg">
      <div className="flex flex-col justify-center w-fit py-10 ps-8 pe-12 text-xl font-sans w-fit borderl-2 border-gray-500 w-full h-[90%] gap-1*">
        <h1
          className="
        // bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500* bg-clip-text text-transparent
        orange_gradient* 
        text-5xl pb-5 font-bold "
        >
          Login
        </h1>

        <div className="flex flex-col bg-blue-300* h-[50%] justify-center gap-1">
          <input
            className="ps-6 pe-12 py-3"
            placeholder="enter user name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            onKeyUp={clickOnEnterPress}
          />
          <p className="text-lg text-red-500 p-2 px-3">{usernameError}</p>
          <div className="flex w-full justify-end items-center">
            <input
              name="showPass"
              placeholder="enter password"
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
            {passwordError ? passwordError : loginError}
          </p>
          <p className="text-blue-600 hover:underline px-3 text-xl">
            forgot password
          </p>
        </div>

        <button
          className={`${
            loading
              ? "bg-gray-600"
              : // : "button"
                "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 hover:opacity-[0.9]"
          } text-white mx-0 p-3`}
          onClick={loginSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;
