"use client";
import axios from "axios";
import { useState } from "react";
import { changePasswordValidation } from "@app/registration/formValidation";

function ChangePassword() {
  const [username, setName] = useState("");
  const [OldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [adminPasswordError, setAdminPasswordError] = useState("");
  const [changePasswordError, setChangePasswordError] = useState(false);
  const [changePasswordMsg, setChangePasswordMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginSubmit = async () => {
    const formData = {
      username,
      OldPassword,
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
        ? error.inner[0].path === "OldPassword"
          ? (setOldPasswordError(
              error.inner[0].message.replace("OldPassword", "Old Password")
            ),
            setNewPasswordError(""),
            setAdminPasswordError(""),
            setChangePasswordMsg(""))
          : error.inner[0].path === "newPassword"
          ? (setNewPasswordError(
              error.inner[0].message.replace("newPassword", "New Password")
            ),
            setOldPasswordError(""),
            setAdminPasswordError(""),
            setChangePasswordMsg(""))
          : (setAdminPasswordError(
              error.inner[0].message.replace("adminPassword", "Admin Password")
            ),
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
    <div className="flex flex-col justify-evenly  py-10* ps-8 pe-12 text-xl font-sans  border-gray-500 w-full h-[90] gap-10">
      <h1
        className="
        text-main-blue
        text-5xl pb-5 font-bold"
      >
        Change Password
      </h1>

      <div className="flex flex-col bg-blue-300* h-[50%] justify-center">
        <input
          className="ps-6 pe-12 py-3"
          placeholder="Old Password"
          type="text"
          onChange={(e) => setOldPassword(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">{oldPasswordError}</p>
        <input
          className="ps-6 pe-12 py-3"
          placeholder="New Password"
          type="text"
          onChange={(e) => setNewPassword(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <p className="text-lg text-red-500 p-2 px-3">{newPasswordError}</p>
        <input
          className="ps-6 pe-12 py-3"
          placeholder="Admin Password"
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
          loading ? "bg-gray-600" : "bg-main-blue"
        } text-white mx-0 p-3 font-[500]`}
        onClick={loginSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default ChangePassword;
