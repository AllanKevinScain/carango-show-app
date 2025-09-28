import { useState } from "react";
import type {
  SessionInterface,
  SessionProviderInterface,
} from "./session.type";
import { SessionContext } from "./context";
import { jwtDecode } from "jwt-decode";
import { removeCookie, setCookie } from "@/helpers";
import { SESSION_TOKEN_NAME } from "@/utils";

export const SessionProvider = (props: SessionProviderInterface) => {
  const { children } = props;

  const [session, setSession] = useState<SessionInterface | null>(null);

  function signIn(token: string) {
    const decoded = jwtDecode(token) as SessionInterface;
    setSession(decoded);
    setCookie(SESSION_TOKEN_NAME, token);
  }

  function signOut() {
    setSession(null);
    removeCookie(SESSION_TOKEN_NAME);
  }

  return (
    <SessionContext.Provider
      value={{
        session,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

/*
const STORAGE_KEY = "myapp_auth";

function saveToStorage(token: string, user: User) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ token, user, savedAt: new Date().toISOString() })
  );
}

function removeFromStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

function readFromStorage(): { token: string; user: User } | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed.token && parsed.user) return { token: parsed.token, user: parsed.user };
  } catch (e) {
    // ignore parse errors
  }
  return null;
}
*/
