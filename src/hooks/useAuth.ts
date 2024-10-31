import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in on mount
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'false');
    }
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;
