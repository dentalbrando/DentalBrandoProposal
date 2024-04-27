import { removeTokenFromCookies } from "@app/registration/auth";

export async function GET(req) {
  // const cookie = removeTokenFromCookies();
  return new Response(null, {
    headers: {
      "Set-Cookie": [
        `authToken=null; HttpOnly`,
        `logOut=true; HttpOnly`,
      ],
    },
  });
}


// headers: { "Set-Cookie": cookie },