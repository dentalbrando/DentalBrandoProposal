"use client";
import axios from "axios";
import { useState } from "react";
import {
  changePasswordValidation,
  formValidation,
} from "@app/registration/formValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setCookies } from "@app/registration/auth";

function ChangePassword() {
  const [username, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [adminPasswordError, setAdminPasswordError] = useState("");
  const [changePasswordError, setChangePasswordError] = useState(false);
  const [changePasswordMsg, setChangePasswordMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginSubmit = async () => {
    console.log("login");
    const formData = {
      username,
      oldPassword,
      newPassword,
      adminPassword,
    };
    try {
      setLoading(true);
      await changePasswordValidation.validate(formData, { abortEarly: false });
      let result = await axios.post(`/api/chagnePassword`, formData);
      result.data.msg
        ? (setChangePasswordMsg(result.data.msg), setChangePasswordError(""))
        : (setChangePasswordError(result.data.error),
          setChangePasswordMsg(""),
          setOldPasswordError(""),
          setNewPasswordError(""),
          adminPasswordError(""));
    } catch (error) {
      error.inner
        ? error.inner[0].path === "password"
          ? (setOldPasswordError(error.inner[0].message),
            setNewPasswordError(""),
            setAdminPasswordError(""),
            setChangePasswordMsg(""))
          : error.inner[0].path === "newPassword"
          ? (setNewPasswordError(error.inner[0].message),
            setOldPasswordError(""),
            setAdminPasswordError(""),
            setChangePasswordMsg(""))
          : (setAdminPasswordError(error.inner[0].message),
            setOldPasswordError(""),
            setNewPasswordError(""),
            setChangePasswordMsg(""))
        : (setOldPasswordError(""),
          setNewPasswordError(""),
          setAdminPasswordError(""),
          setChangePasswordMsg(""));
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
      <h1
        className="
        // bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500* bg-clip-text text-transparent
        orange_gradient* 
        text-5xl pb-5 font-bold "
      >
        Change Password
      </h1>

      <div className="flex flex-col bg-blue-300* h-[50%] justify-center">
        {/* <input
          className="ps-6 pe-12 py-3"
          placeholder="enter username"
          type="text"
          onChange={(e) => setName(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">{usernameError}</p> */}
        <input
          className="ps-6 pe-12 py-3"
          placeholder="enter old password"
          type="text"
          onChange={(e) => setOldPassword(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">{oldPasswordError}</p>
        <input
          className="ps-6 pe-12 py-3"
          placeholder="enter new password"
          type="text"
          onChange={(e) => setNewPassword(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">{newPasswordError}</p>
        <input
          className="ps-6 pe-12 py-3"
          placeholder="enter admin password"
          type="text"
          onChange={(e) => setAdminPassword(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">{adminPasswordError}</p>
        <p
          className={`text-lg ${
            changePasswordMsg ? "text-blue-500" : "text-red-500"
          } p-2 px-3`}
        >
          {changePasswordMsg ? changePasswordMsg : changePasswordError}
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
    // </div>
  );
}

export default ChangePassword;
