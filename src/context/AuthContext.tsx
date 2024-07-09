"use client";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { UserType } from "@/types/users";


const baseURL = "http://localhost:5000";



const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});




export const AuthContext = createContext({});

export const AuthContextProvider = ({ children } : React.PropsWithChildren<{}> ) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const loadUser = () => {
    const token = getCookie("token");

    if (token) {
      setToken(token);
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getCurentUser();
    }
    setIsReady(true);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const LoginUser = async (email : string, password : string) => {
    try {
      const result = await axiosInstance.post(`/auth/token`, {
        email,
        password,
      });
      if (result?.data) {
        setToken(result?.data.token);
        setCookie("token", result.data.access_token);
        getCurentUser();
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const RegisterUser = async (password : string, email : string, first_name : string, last_name : string) => {


    try {
      const result = await axiosInstance.post(`/users/add`, {
      id : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      username : generateUsernamebyEmail(email),
      email,
      first_name,
      last_name,
      is_staff : false,
      is_superuser : false,
      avatar_url: null,
      password,
      });
      if (result?.data) {
        return {res : true, username : generateUsernamebyEmail(email)}
      }
    } catch (error) {
      console.error(error);
    }
    return user;
  };

  const Logout = () => {
    setToken(null);
    setUser(null);
    deleteCookie("token");
  };

   const getCurentUser = async () => {
    try {
        const result = await axiosInstance.post("/auth/me");

        if (result?.data) {
          setUser(result?.data);
          console.log("current user",result.data);
        }
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isReady,
        LoginUser,
        Logout,
        RegisterUser,
      }}
    >
      {isReady ? children : <div className="w-full h-screen flex items-center justify-center bg-foreground">
        <Loader className="w-10 h-10 animate-spin text-primary" size={24} />
      </div>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const generateUsernamebyEmail = (email : string) => {
  return email.split("@")[0];
};