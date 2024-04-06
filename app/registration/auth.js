import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export function setTokenToCookies(userData) {
  // let securityKey = "securityKey";
  let token = jwt.sign(userData, "securityKey", { expiresIn: "1h" });

  const cookie = serialize("authToken", token, {
    maxAge: 3600,
    expires: new Date(Date.now() + 3600),
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  return cookie;
}

export function removeTokenFromCookies() {
  const cookie = serialize("authToken", null, {
    maxAge: 0,
    expires: new Date(),
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  return cookie;
}
