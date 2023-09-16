import React, { createContext, useEffect, useState } from 'react';
import { deleteStores } from '../utils/createAsyncStore';

export type AuthenticationStatus = 'loading' | 'logged' | 'not-logged';

interface SessionUserData {
  access: any;
  refresh: any;
  userId: any;
}
export interface AuthState {
  accessToken: string;
  refreshToken: string;
  status: AuthenticationStatus;
  userId: string;
}

export type AuthContextType = {
  authState: AuthState;
  getAccessToken: () => string;
  getRefreshToken: () => string;
  logout: () => Promise<void>;
  login: (access: string, refresh: string, userId: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  authState: {
    accessToken: '',
    refreshToken: '',
    status: 'loading',
    userId: '',
  },
  getAccessToken: () => '',
  getRefreshToken: () => '',
  logout: async () => {},
  login: async () => {},
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [userId, setUserId] = useState('');
  const [status, setStatus] = useState<AuthenticationStatus>('loading');

  useEffect(() => {
    // Load tokens from keychain
    const userData: SessionUserData = JSON.parse(
      localStorage.getItem('userSession')
    );
    //console.log('Data: ', userData);
    if (userData) {
      setAccessToken(userData.access);
      setRefreshToken(userData.refresh);
      setUserId(userData.userId);
      setStatus('logged');
    } else {
      setStatus('not-logged');
    }
  }, []);

  const logout = async () => {
    localStorage.clear();
    setAccessToken('');
    setRefreshToken('');
    setUserId('');
    setStatus('not-logged');
    deleteStores('privates');
  };

  const login = async (access: string, refresh: string, Id: string) => {
    setAccessToken(access);
    setUserId(Id);
    setStatus('logged');
    localStorage.setItem(
      'userSession',
      JSON.stringify({
        access,
        refresh,
        userId: Id,
      })
    );
  };

  const getAccessToken = () => {
    return accessToken;
  };

  const getRefreshToken = () => {
    return refreshToken;
  };

  return (
    <AuthContext.Provider
      value={{
        authState: {
          accessToken,
          refreshToken,
          status,
          userId,
        },
        getAccessToken,
        getRefreshToken,
        logout,
        login,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
