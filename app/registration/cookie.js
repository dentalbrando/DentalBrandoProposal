import { serialize } from "cookie";

export const setAuthTokenCookie = (res, token) => {
  const cookie = serialize("authToken", token, {
    maxAge: 3600, // 1 hour in seconds
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
    secure: true, // Consider using for HTTPS only
    sameSite: "lax",
  });
  res.setHeader("Set-Cookie", cookie);
};
