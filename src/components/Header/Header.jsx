import * as S from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Для взятия текущего пути
import { RoutesApp } from "../../const";
import { useState } from "react";
import { useViewport } from "../../hooks/useViewport";

export default function Header() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useViewport(451);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }

  // ОПРЕДЕЛЕНИЕ ТЕКСТА В КНОПКЕ
  const getActiveLinkName = () => {
    switch (location.pathname) {
      case RoutesApp.NEW_EXPENSE:
        return "Новый расход";
      case RoutesApp.ANALYSIS:
        return "Анализ расходов";
      default:
        return "Мои расходы";
    }
  };

  return (
    <S.Header>
      <S.HeaderBlock>
        <S.HeaderLogo onClick={() => navigate("/")}>
          <S.HeaderLogoImg src="/logo.svg" alt="logo" />
        </S.HeaderLogo>

        {user && (
          <>
            <S.HeaderNav>
              {!isMobile ? (
                <S.HeaderLinks>
                  <S.HeaderNavLink to="/">Мои расходы</S.HeaderNavLink>
                  <S.HeaderNavLink to="/analysis">Анализ расходов</S.HeaderNavLink>
                </S.HeaderLinks>
              ) : (
                <S.HeaderLinks>
                  <S.MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
                    {/* Показываем название текущей активной страницы */}
                    <S.HeaderNavLink>{getActiveLinkName()}</S.HeaderNavLink>
                    <S.MobileHeaderLogoImg
                      alt="раскрыть меню"
                      src="/first-box/target.svg"
                      $isOpen={isMenuOpen}
                    />
                  </S.MobileMenuButton>
                  
                  {isMenuOpen && (
                    <S.MobileDropdown>
                      <S.MobileHeaderMenuItem $isActive={location.pathname === RoutesApp.MAIN}>
                        <S.MobileMenuItemLink to={RoutesApp.MAIN} onClick={() => setIsMenuOpen(false)}>
                          Мои расходы
                        </S.MobileMenuItemLink>
                      </S.MobileHeaderMenuItem>

                      <S.MobileHeaderMenuItem $isActive={location.pathname === RoutesApp.NEW_EXPENSE}>
                        <S.MobileMenuItemLink to={RoutesApp.NEW_EXPENSE} onClick={() => setIsMenuOpen(false)}>
                          Новый расход
                        </S.MobileMenuItemLink>
                      </S.MobileHeaderMenuItem>

                      <S.MobileHeaderMenuItem $isActive={location.pathname === RoutesApp.ANALYSIS}>
                        <S.MobileMenuItemLink to={RoutesApp.ANALYSIS} onClick={() => setIsMenuOpen(false)}>
                          Анализ расходов
                        </S.MobileMenuItemLink>
                      </S.MobileHeaderMenuItem>
                    </S.MobileDropdown>
                  )}
                </S.HeaderLinks>
              )}
            </S.HeaderNav>

            <S.HeaderLinkExitText onClick={handleLogout}>
              Выйти
            </S.HeaderLinkExitText>
          </>
        )}
      </S.HeaderBlock>
    </S.Header>
  );
}