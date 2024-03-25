"use client";
import axios from "axios";
import { useState } from "react";
const Permission = (prop) => {
  let [permission, setPermission] = useState(false);
  async function permissionSubmit() {
    await axios.post("/api/permission", {
      username: prop.username,
      permission,
    });
  }
  return (
    <div className="bg-blue-600 flex rounded-lg flex-col">
      <div className="flex justify-between p-3 ps-2 pe-4 text-xl font-sans">
        <input
          style={{width:"40px"}}
          type="checkbox"
          onChange={(e) => {
            setPermission(e.target.checked);
          }}
          value={permission}
        />
        <h1 className="font-bold">Permission</h1>
      </div>
      <button
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-md px-3 py-2 m-2 dark:focus:ring-yellow-900"
        onClick={permissionSubmit}
      >
        submit
      </button>
    </div>
  );
};

export default Permission;
