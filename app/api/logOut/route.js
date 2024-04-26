import { removeTokenFromCookies } from "@app/registration/auth";

export async function GET(req) {
  return new Response(null, {
    headers: { "Set-Cookie": removeTokenFromCookies() },
  });
}
