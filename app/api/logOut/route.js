import { removeTokenFromCookies } from "@app/registration/auth";


export async function GET(req) {
  // Assuming Response and Response are available here
  const cookie = removeTokenFromCookies();
  return new Response(null, {
    headers: { "Set-Cookie": cookie },
  });
}