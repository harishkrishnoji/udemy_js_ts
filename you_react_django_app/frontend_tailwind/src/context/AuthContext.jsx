// Not used

import React, { createContext, useState, useContext, useEffect} from 'react'
import api from "../api";
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../data/TokenConstants";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    userName: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  });
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo') || null);
  // const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
  // const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (ACCESS_TOKEN) {
      verifyToken();
    }
  }, [ACCESS_TOKEN]);

  const verifyToken = async () => {
    console.log('verify token: '+localStorage.getItem(ACCESS_TOKEN));
    api.post("/api/token/verify/", {"token": localStorage.getItem(ACCESS_TOKEN) })
    .then(setIsLoggedIn(true))
    .catch(error => {
      if (REFRESH_TOKEN) { 
        refreshAccessToken(REFRESH_TOKEN)
      } else {
        console.error("Access Token Expired:", error);
      }
    });
  }

  const refreshAccessToken = async (REFRESH_TOKEN) => {
    api.post("/api/token/refresh/", {"refresh": authState.refreshToken })
    .then(response => {
      // localStorage.setItem(ACCESS_TOKEN, response.data.access);
      setAuthState(prev => ({
        ...prev,
        accessToken: response.data.access,
      }));
      setIsLoggedIn(true);
    })
    .catch(error => {
      console.error("Refresh Token Expired:", error);
    });
  }

  const getUserInfo = async (ACCESS_TOKEN) => {
    api.post("/api/token/userinfo/", {"token": localStorage.getItem(ACCESS_TOKEN) })
    .then(response => {
      if (response.status !== 200) {
        console.error("Failed to get UserInfo2:", response);
        return;
      }
      // console.log('api response userinfo: '+response);
      setUserInfo(response.data);
      setUser(response.data.username);
    })
    .catch(error => {
      console.error("Failed to get UserInfo1:", error);
    });
  }

  const login = async (username, password) => {
    api.post("/api/token/", { username, password })
      .then(response => {
        // console.log('api response login: '+response.data.access);
        // console.log('api response login: '+response);
        if (response.status !== 200) {
          console.error("Login failed:", response);
          return;
        }
        setAuthState({
          userName: username,
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
          isAuthenticated: true,
        });
        // localStorage.setItem(ACCESS_TOKEN, response.data.access);
        // localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        // console.log('local storage access token: '+localStorage.getItem(ACCESS_TOKEN));
        // api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
        api.defaults.headers.common['Authorization'] = `Bearer ${authState.accessToken}`;
        // setAccessToken(response.data.access);
        // setRefreshToken(response.data.refresh);
        setUser(username);
        setIsLoggedIn(true);
        // localStorage.setItem('user', username);
        // localStorage.setItem('isLoggedIn', true);
        // getUserInfo(ACCESS_TOKEN);
        navigate("/home");
      })
      .catch(error => {
        console.error("Login failed:", error);
      });
  }
  
  const logout = () => {
    setAuthState({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('REFRESH_TOKEN')
    navigate("/login");
  }
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
