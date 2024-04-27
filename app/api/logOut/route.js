import { removeTokenFromCookies } from "@app/registration/auth";

export async function GET(req) {
  // const cookie = removeTokenFromCookies();
  let data = {
    name: "ahmad",
  }
  alert("hello")
  return new Response(data, {
    headers: {
      "Set-Cookie": [
        `authToken=null; HttpOnly`,
        `logOut=true; HttpOnly`,
      ],
    },
  });
}


// headers: { "Set-Cookie": cookie },