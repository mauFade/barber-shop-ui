import { useRouter } from "next/router";
import { createContext, useCallback, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface User {
  email: string;
  name: string;
  phone?: string;
}

export interface UserContextProps {
  loading: boolean;
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({} as any);

export function UserProvider({ children }: any) {
  const router = useRouter();
  const { get, set } = useLocalStorage();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const carregarUsuario = useCallback(
    function () {
      try {
        const usuarioLocal = get("usuario");
        if (usuarioLocal) {
          setUser(usuarioLocal);
        }
      } finally {
        setLoading(false);
      }
    },
    [get]
  );

  async function login(usuario: User) {
    setUser(usuario);
    set("usuario", usuario);
  }

  async function logout() {
    router.push("/");
    setUser(null);
    set("usuario", null);
  }

  useEffect(() => carregarUsuario(), [carregarUsuario]);

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
