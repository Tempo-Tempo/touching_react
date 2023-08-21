import React from "react";
import { isAuthContext } from "../context";
import { useContext } from "react";

function useAuth() {
   return useContext(isAuthContext).isAuth;
}

export default useAuth;