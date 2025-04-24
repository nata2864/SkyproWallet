import "./App.css";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <AppRoutes />
        <ToastContainer autoClose={1500} />
      </div>
    </>
  );
}

export default App;
