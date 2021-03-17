import { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

export function AuthContextWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const login = useCallback((userId, token) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, token, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
