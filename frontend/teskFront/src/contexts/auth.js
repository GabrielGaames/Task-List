import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});
//estamos criando o contexto de autenticação, singin e singout.
export const AuthProvider = ({ children }) => {
  const signout = () => {
    localStorage.removeItem("user_token");
  };
  return (
    <AuthContext.Provider value={{ signout }}>{children}</AuthContext.Provider>
  );
};
