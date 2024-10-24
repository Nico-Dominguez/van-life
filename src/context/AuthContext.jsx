// context/AuthContext.jsx
import React, { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin")
  );

  function login() {
    localStorage.setItem("loggedin", true);
    setIsLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("loggedin");
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
