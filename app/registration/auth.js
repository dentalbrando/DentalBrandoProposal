import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export function setTokenToCookies(userData) {
  const securityKey = process.env.SECURITY_KEY;
  const token = jwt.sign(userData, securityKey, { expiresIn: "1h" });

  const cookie = serialize("authToken", token, {
    maxAge: 3600,
    expires: new Date(Date.now() + 3600 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return cookie;
}

export function removeTokenFromCookies() {
  const securityKey = process.env.SECURITY_KEY;
  let userData = {
    name: "ahamd",
    password:"ahmad1"
  };
  const token = jwt.sign(userData, securityKey, { expiresIn: 10 });
  const cookie = serialize("authToken", token, {
    maxAge: 10,
    expires: new Date(Date.now() + 10 ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return cookie;
}
