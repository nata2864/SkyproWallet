import { Navigate, Outlet } from "react-router-dom";
// import { RoutesApp } from "./const";
import { RoutesApp } from "../const";

function PrivateRoute({ isAuth }) {
    return isAuth ? <Outlet /> : <Navigate to={RoutesApp.SIGN_IN} />;
}

export default PrivateRoute;
