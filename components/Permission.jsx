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
    <>
      <div className="flex justify-between p-3 text-xl font-sans">
        <input
          type="checkbox"
          onChange={(e) => {
            setPermission(e.target.checked);
          }}
          value={permission}
        />
        <h1>Permission</h1>
      </div>
      <button onClick={permissionSubmit}>submit</button>
    </>
  );
};

export default Permission;
