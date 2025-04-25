import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

import { Outlet } from "react-router-dom";

function MainPage() {

  return (
    <div>
      <Header />
      <Main />
      < Outlet/>
    </div>
  );
}

export default MainPage;
