import "./App.css";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />

      <ToastContainer autoClose={1500} />
    </AuthProvider>
  );
}

export default App;
