import { useEffect } from "react";
import Cookies from "js-cookie";

function useCookieExpiration(cookieName, expirationTimeInSeconds) {
  useEffect(() => {
    const timer = setTimeout(() => {
      Cookies.remove(cookieName);
    }, expirationTimeInSeconds * 1000);

    return () => clearTimeout(timer);
  }, [cookieName, expirationTimeInSeconds]);
}

export default useCookieExpiration;
