import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export function createToken(userData) {
  console.log("createToken");
  try {
    let securityKey = "securityKey";
    return jwt.sign(userData, securityKey, { expiresIn: "1h" });
  } catch (err) {
    console.log(err);
  }
}

export function verifyToken(token) {
  console.log("verifyToken");
  let securityKey = "securityKey";
  try {
    jwt.verify(token, securityKey);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export function setCookies(token) {
  console.log("setCookies");
  Cookies.set("token", token, { expiresIn: "1" });
}

export function getCookies() {
  console.log("getCookies");
  return Cookies.get("token");
}
