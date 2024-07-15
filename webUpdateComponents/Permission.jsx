"use client";
import axios from "axios";
import { useState } from "react";
const Permission = (prop) => {
  let [permission, setPermission] = useState(false);
  let [loading, setLoading] = useState(false);
  async function permissionSubmit() {
    try {
      setLoading(true);
      await axios.post("/api/permission", {
        username: prop.username,
        permission,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-blue-600 flex rounded-lg flex-col p-3">
      <div className="flex justify-between p-3 text-xl font-sans">
        <h1 className="font-bold">Permission</h1>
        <input
          style={{ width: "40px" }}
          type="checkbox"
          onChange={(e) => {
            setPermission(e.target.checked);
          }}
          value={permission}
        />
      </div>
      <button
        className={`mt-3 mx-0 p-2 ${
          loading
            ? "bg-gray-500"
            : "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500"
        } font-bold rounded-lg text-lg px-3 py-2`}
        onClick={permissionSubmit}
      >
        submit
      </button>
    </div>
  );
};

export default Permission;
