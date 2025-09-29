import { useEffect, useState } from "react";
import type {
  SessionInterface,
  SessionProviderInterface,
} from "./session.type";
import { SessionContext } from "./context";
import { jwtDecode } from "jwt-decode";
import { getCookie, removeCookie, setCookie } from "@/helpers";
import { SESSION_TOKEN_NAME } from "@/utils";

export const SessionProvider = (props: SessionProviderInterface) => {
  const { children } = props;

  const [session, setSession] = useState<SessionInterface | null>(null);
  const [loading, setLoading] = useState(true);

  function signIn(token: string) {
    const decoded = jwtDecode(token) as SessionInterface;
    setSession(decoded);
    setCookie(SESSION_TOKEN_NAME, token);
  }

  function signOut() {
    setSession(null);
    removeCookie(SESSION_TOKEN_NAME);
  }

  useEffect(() => {
    const token = getCookie(SESSION_TOKEN_NAME);

    if (token) {
      try {
        setSession(jwtDecode(token) as SessionInterface);
      } catch {
        setSession(null);
      }
    } else {
      setSession(null);
    }

    setLoading(false);
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
