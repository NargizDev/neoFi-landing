import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Здесь должен быть реальный запрос к API
    // Пример mock-ответа:
    if (email && password) {
      const fakeToken = "jwt.token.here";
      setToken(fakeToken);
      setUser({ email });
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify({ email }));
    } else {
      throw new Error("Неверные данные");
    }
  };

  const register = async (email: string, password: string) => {
    // Здесь должен быть реальный запрос к API
    // Пример mock-ответа:
    if (email && password) {
      const fakeToken = "jwt.token.here";
      setToken(fakeToken);
      setUser({ email });
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify({ email }));
    } else {
      throw new Error("Ошибка регистрации");
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth должен использоваться внутри AuthProvider");
  return ctx;
};
