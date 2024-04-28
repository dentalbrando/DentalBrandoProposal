import { removeTokenFromCookies } from "@app/registration/auth";


export async function GET(req) {
  const cookie = removeTokenFromCookies();
  
  return new Response(null, {
    headers: { "Set-Cookie": cookie },
  });
}