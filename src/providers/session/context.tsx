import { createContext } from "react";
import type { SessionContextInterface } from "./session.type";

export const SessionContext = createContext<SessionContextInterface>({
  session: null,
  signIn: () => null,
  signOut: () => null,
});
