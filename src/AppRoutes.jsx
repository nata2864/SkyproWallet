import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import SignInPage from './pages/SignInPage/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage .jsx';
import { RoutesApp } from './const.js';
import Layout from './components/Layout/Layout.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AnalysisPage from './pages/Analysis/Analysis.jsx';
import ExpensePage from './pages/ExpensePage/ExpensePage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path={RoutesApp.MAIN} element={<MainPage />} />
          <Route path={RoutesApp.ANALYSIS} element={<AnalysisPage />} />
          <Route path={RoutesApp.NEW_EXPENSE_ID} element={<ExpensePage />} />
          <Route path={RoutesApp.NEW_EXPENSE} element={<ExpensePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
