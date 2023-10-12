/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del contexto");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const registerAuthenticated = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const loginAuthenticated = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 10000);
      return () => clearInterval(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        console.log("El token no existe");
        setLoading(false);
        setIsAuthenticated(false);
        return setUser(null);
      } else {
        try {
          const res = await verifyTokenRequest(cookies.token);
          if (!res.data) {
            console.log("El token no es valido");
            setLoading(false);
            return setIsAuthenticated(false);
          } else {
            console.log("El token es valido");
            setLoading(false);
            setIsAuthenticated(true);
            return setUser(res.data);
          }
        } catch (error) {
          console.log("Hubo un error");
          console.log(error);
          setLoading(false);
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerAuthenticated,
        loginAuthenticated,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
