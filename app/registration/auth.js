import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export function setTokenToCookies(userData) {
  console.log("add func");

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
  console.log("remove func");
  const cookie = serialize("authToken", "", {
    maxAge: -1,
    expires: new Date(),
    httpOnly: false,
    secure: false, // Set to true if not using HTTPS
    sameSite: "lax",
  });

  return cookie;
}
