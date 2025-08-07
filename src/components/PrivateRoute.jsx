import { Navigate, Outlet } from "react-router-dom";
import { RoutesApp } from "../const";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ExpenseProvider } from "../context/ExpenseProvider";

function PrivateRoute() {
  const { user } = useContext(AuthContext);
  // Всё падало, т.к. ошибка в expense падала до проверки user`a
  return user ? (
    <ExpenseProvider>
      <Outlet />
    </ExpenseProvider>
  ) : (
    <Navigate to={RoutesApp.SIGN_IN} /> 
  );
}

export default PrivateRoute;