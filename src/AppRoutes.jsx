import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage .jsx";
import { RoutesApp } from "./const.js";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute.jsx";

function AppRoutes() {

  const [isAuth, setIsAuth] = useState(false);


  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>  <Route path={RoutesApp.MAIN} element={<MainPage />} />
      </Route>
  
    <Route path={RoutesApp.SIGN_IN} element={<SignInPage setIsAuth={setIsAuth} />} />
    <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />
  </Routes>
  );
}

export default AppRoutes;
