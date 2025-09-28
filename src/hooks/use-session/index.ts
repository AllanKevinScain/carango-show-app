import { SessionContext } from "@/providers";
import { useContext } from "react";

export function useSession() {
  const { session, signIn, signOut } = useContext(SessionContext);

  function login(token: string) {
    signIn(token);
  }

  return {
    data: session,
    login,
    logout: signOut,
  };
}
