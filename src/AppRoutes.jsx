import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage .jsx";
import { RoutesApp } from "./const.js";

function AppRoutes() {
  return (
    <Routes>
    <Route path={RoutesApp.MAIN} element={<MainPage />} />
    <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
    <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />
  </Routes>
  );
}

export default AppRoutes;
