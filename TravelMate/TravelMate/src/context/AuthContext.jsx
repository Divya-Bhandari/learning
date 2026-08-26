import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("travelmateLoggedIn") === "true"
  );

  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("travelmateUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const login = (userData) => {
    localStorage.setItem(
      "travelmateLoggedIn",
      "true"
    );

    localStorage.setItem(
      "travelmateUser",
      JSON.stringify(userData)
    );

    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem(
      "travelmateLoggedIn"
    );

    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};