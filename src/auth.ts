import { AUTH_TOKEN } from './constants';

export const saveToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return !!token;
};
