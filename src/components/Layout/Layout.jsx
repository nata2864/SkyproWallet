import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { ExpenseProvider } from "../../context/ExpenseProvider";

function Layout() {
  return (
    <div>
      <Header />
      {/*НЕ РАБОТАЛ ExpensePage - из-за того что ExpenseProvider не видил.*/}
      <ExpenseProvider>
        <Outlet />
      </ExpenseProvider>
    </div>
  );
}

export default Layout;
