import {
  removeTokenFromCookies,
  setTokenToCookies,
} from "@app/registration/auth";

export async function GET(req) {
  const cookie = removeTokenFromCookies();
  let userData = {
    name: "ahmad",
  };
  return new Response(null, {
    headers: { "Set-Cookie": setTokenToCookies(userData, 10) },
  });
}
