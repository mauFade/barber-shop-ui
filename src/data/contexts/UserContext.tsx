import { useRouter } from "next/router";
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface User {
  email: string;
  nome: string;
  telefone?: string;
}

export interface UserContextProps {
  loading: boolean;
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
}

const userContext = createContext<UserContextProps>({} as any);

export function UserProvider({ children }: any) {
  const router = useRouter();
  const { get, set } = useLocalStorage();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
}
