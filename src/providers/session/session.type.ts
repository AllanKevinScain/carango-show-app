export interface SessionInterface {
  id: number;
  name: string;
  email: string;
  role: "admin" | "customer";
  created_at: string;
  iat: number;
  exp: number;
}

export interface SessionContextInterface {
  session: SessionInterface | null;
  loading: boolean;
  signIn: (_: string) => void;
  signOut: () => void;
}

export interface SessionProviderInterface {
  children: React.ReactNode;
}
