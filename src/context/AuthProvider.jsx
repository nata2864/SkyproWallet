import { useState } from "react";
import { AuthContext } from "./AuthContext";

const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem("userInfo");
    if (!storedUser) {
      return null;
    }
    
    const userObject = JSON.parse(storedUser);
    
    // Проверяем, что объект не пустой
    if (userObject && Object.keys(userObject).length > 0) {
      return userObject;
    }

    // Если объект пустой или некорректный, считаем, что пользователя нет
    return null;
  } catch (error) {
    console.error("Ошибка при чтении данных из localStorage:", error);
    return null;
  }
};

const AuthProvider = ({ children }) => {
  // Используем нашу безопасную функцию для инициализации
  const [user, setUser] = useState(getInitialUser());

  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;