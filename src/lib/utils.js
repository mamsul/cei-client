import Cookies from "js-cookie";

export const setToken = ({ token, expired }) => {
  const expirationTime = new Date(Date.now() + expired * 1000);
  Cookies.set("token_expiration", expired);
  Cookies.set("token", token, {
    expires: expirationTime,
    secure: true,
  });
};
