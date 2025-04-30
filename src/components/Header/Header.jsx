import * as S from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";

export default function Header() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }
  return (
    <S.Header>
      <S.HeaderBlock>
        <S.HeaderLogo>
          <S.HeaderLogoImg src="public/" alt="logo"></S.HeaderLogoImg>
        </S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderLinks>
            <S.HeaderLinkText>Мои расходы</S.HeaderLinkText>
            <S.HeaderLinkText>Анализ расходов</S.HeaderLinkText>
          </S.HeaderLinks>
        </S.HeaderNav>
        <S.HeaderLinkExitText onClick={handleLogout}>
          Выход
        </S.HeaderLinkExitText>
      </S.HeaderBlock>
    </S.Header>
  );
}
