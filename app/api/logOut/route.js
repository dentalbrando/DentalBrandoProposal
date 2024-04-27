import { removeTokenFromCookies } from "@app/registration/auth";

export async function GET(req) {
  const cookie = removeTokenFromCookies();
  let data = {
    name: "ahmad",
  };
  return new Response(data, {
    headers: { "Set-Cookie": cookie },
  });
}

// headers: {
//   "Set-Cookie": [
//     `authToken=null; HttpOnly`,
//     `logOut=true; HttpOnly`,
//   ],
// },
