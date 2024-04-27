import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import Cookies from "universal-cookie";

export function setTokenToCookies(userData) {
  const securityKey = process.env.SECURITY_KEY; // Assuming process.env.SECURITY_KEY is set properly
  const token = jwt.sign(userData, securityKey, { expiresIn: "1h" });

  const cookie = serialize("authToken", token, {
    maxAge: 3600,
    expires: new Date(Date.now() + 3600 * 1000), // Use milliseconds
    httpOnly: true,
    secure: true, // Set to true if not using HTTPS
    sameSite: "lax",
  });

  return cookie;
}

export function removeTokenFromCookies() {
  const cookie = serialize("authToken", "", {
    maxAge: -1,
    expires: new Date(),
    httpOnly: true,
    secure: true, // Set to true if not using HTTPS
    sameSite: "lax",
  });

  return cookie;
}
