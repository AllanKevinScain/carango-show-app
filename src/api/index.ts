import { getCookie, removeCookie } from "@/helpers";
import type { SessionInterface } from "@/providers/session/session.type";
import { SESSION_TOKEN_NAME } from "@/utils";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "api-key": import.meta.env.VITE_API_KEY,
  },
});

api.interceptors.request.use(
  (config) => {
    const isPostApi = config.method === "post";
    const allowedApis = ["/auth", "/user"];

    if (allowedApis.includes(config.url || "") && isPostApi) return config;

    const token = getCookie(SESSION_TOKEN_NAME);

    if (token) {
      const decoded = jwtDecode<SessionInterface>(token);
      const now = Math.floor(Date.now() / 1000);

      if (decoded.exp && decoded.exp > now) {
        config.headers.set(
          "Authorization",
          `Bearer ${token.replace('"', "").replace('"', "")}`
        );
      } else {
        console.warn(
          "⚠️ Token expirado, considerar renovar ou redirecionar login"
        );
        removeCookie(SESSION_TOKEN_NAME);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
