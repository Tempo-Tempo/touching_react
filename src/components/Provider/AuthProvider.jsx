import React, { useCallback, useState } from "react";
import { isAuthContext } from "../context";

const AuthProvider = ({children}) => {
   const [authUser, setAuthUser] = useState('');
   const [isAuth, setIsAuth] = useState(false);
   const login = useCallback(() => setIsAuth(true));
   const logout = useCallback(() => setIsAuth(false));
   return (
      <isAuthContext.Provider value={{authUser, setAuthUser, isAuth, setIsAuth, login, logout}}>
         {children}
      </isAuthContext.Provider>
   )
}

export default AuthProvider;