import Cookies from "js-cookie";

export function setCookie(cookieName: string, value: unknown) {
  const cookieValue = JSON.stringify(value);
  Cookies.set(cookieName, cookieValue, { expires: 7 });
}

export function getCookie(cookieName: string) {
  return Cookies.get(cookieName);
}

export function removeCookie(cookieName: string) {
  Cookies.remove(cookieName);
}
