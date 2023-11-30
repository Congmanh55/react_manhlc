// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [clickIcon, setClickIcon] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [url, setUrl] = useState('');

    // Kiểm tra xem có trạng thái đăng nhập trong localStorage không
    useEffect(() => {
      const storedLoggedIn = localStorage.getItem('loggedIn') === 'true';
      if (storedLoggedIn) {
        setLoggedIn(true);
      }
    }, []);

  const login = () => {
    setLoggedIn(true);
    //lưu trang thai
    localStorage.setItem('loggedIn', 'true')
  };

  const register = () => {
    setIsRegister(true);
  }

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  const handleRouterUrl = (data) => {
    setUrl(data)
  }

  const handleIcon = () => {
    setClickIcon(true)
  }
  const handleBackIcon = () => {
    setClickIcon(false)
  }

  return (
    <AuthContext.Provider 
      value={{
        loggedIn, 
        clickIcon, 
        url,
        handleRouterUrl,
        handleIcon, 
        handleBackIcon,
        login, 
        logout 
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};