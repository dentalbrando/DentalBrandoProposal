import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { serialize, } from "cookie";

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
  const cookie = serialize("authToken", token, {
    maxAge: 3600, // 1 hour in seconds
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
    secure:true, // Set secure for HTTPS only
    sameSite: "lax",
  });
  return cookie;
}

export function getCookies() {
  return Cookies.get("token");
}
