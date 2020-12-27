import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const loginHandler = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{isAuth,loginHandler,logout}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
