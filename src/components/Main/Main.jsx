import * as S from "./Main.styled";
import { useContext
 } from "react";
 import { AuthContext } from "../../context/AuthContext";
 import { useNavigate } from "react-router-dom";
 import { RoutesApp } from "../../const";


function Main() {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }
  return (

  

    <S.Main>
      <p>Это главная страница</p>
      <button   onClick={handleLogout}>Выйти</button>
    </S.Main>
  );
}

export default Main;
