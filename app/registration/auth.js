import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export function setTokenToCookies(userData) {
  let securityKey = process.env.SECURITY_KEY;
  let token = jwt.sign(userData, "securityKey", { expiresIn: "1h" });

  const cookie = serialize("authToken", token, {
    maxAge: 3600,
    expires: new Date(Date.now() + 3600),
    httpOnly: false,
    secure: true,
    sameSite: "lax",
  });

  return cookie;
}


export function removeTokenFromCookies() {
  const cookie = serialize("authToken", "", {
    maxAge: -1, // Set maxAge to -1 to expire the cookie immediately
    expires: new Date(0), // Set expires to Unix epoch (past date)
    httpOnly: false, // Ensure cookie is only accessible via HTTP requests
    secure: true, // Only send the cookie over HTTPS connections (if applicable)
    sameSite: "lax", // Restrict cookie access for cross-site requests
  });

  return cookie;
}
