import { SessionContext } from "@/providers";
import { useContext } from "react";

export function useSession() {
  const { session, signIn, signOut, loading } = useContext(SessionContext);

  function login(token: string) {
    signIn(token);
  }

  return {
    data: session,
    logout: signOut,
    loading,
    login,
  };
}
