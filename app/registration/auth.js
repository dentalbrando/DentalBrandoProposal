import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

export function createToken(userData) {
  try {
    let securityKey = "securityKey";
    return jwt.sign(userData, securityKey, { expiresIn: "1h" });
  } catch (err) {
    console.log(err);
  }
}

export function verifyToken(token) {
  let securityKey = "securityKey";
  try {
    jwt.verify(token, securityKey);
    return true;
  } catch (err) {
    return false;
  }
}

export function setCookies(token) {
  Cookies.set("token", token, { expiresIn: "1" });
}

export function getCookies() {
  return Cookies.get("token");
}
