import React, { createContext, useContext } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthContext } from './authContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { appUrl } from '../conf';

export type AxiosContentType = {
  authAxios: AxiosInstance;
  publicAxios: AxiosInstance;
};

const AxiosContext = createContext<AxiosContentType>({
  authAxios: axios.create(),
  publicAxios: axios.create(),
});

export interface AxiosProviderProps {
  children: React.ReactNode;
}

const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => {
  const authContext = useContext(AuthContext);
  const authAxios = axios.create({
    baseURL: appUrl,
  });

  const publicAxios = axios.create({
    baseURL: appUrl,
  });

  authAxios.interceptors.request.use(
    config => {
      if (config.headers && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  publicAxios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  const refreshAuthLogic = (failedRequest: any) => {
    const data = {
      refreshToken: authContext.authState.refreshToken,
    };

    const options: AxiosRequestConfig = {
      method: 'POST',
      data,
      url: appUrl + '/auth/CHILE_TICKETS/users/refresh-token',
      headers: {
        'refresh-token': `${authContext.getRefreshToken()}`,
      },
    };

    return axios(options)
      .then(async tokenRefreshResponse => {
        failedRequest.response.config.headers.Authorization =
          'Bearer ' + tokenRefreshResponse.data.accessToken;

        await authContext.login(
          tokenRefreshResponse.data.accessToken,
          authContext.authState.refreshToken,
          authContext.authState.userId
        );

        return Promise.resolve();
      })
      .catch(e => {
        if (e.message.includes('401')) {
          authContext.logout();
        }
      });
  };

  createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {
    statusCodes: [401],
  });

  return (
    <AxiosContext.Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </AxiosContext.Provider>
  );
};

export { AxiosContext, AxiosProvider };
