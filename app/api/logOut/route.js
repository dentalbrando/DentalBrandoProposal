import { removeTokenFromCookies } from "@app/registration/auth";

export async function GET(req) {
  // Assuming Response and Response are available here
  console.log("try");
  const cookie = removeTokenFromCookies();
  console.log("catch");
  return new Response(null, {
    // headers: { "Set-Cookie": cookie },
    headers: { "Set-Cookie": `authToken=null; HttpOnly` },
  });
}

