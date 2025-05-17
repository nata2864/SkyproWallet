import { useNavigate,useLocation } from 'react-router-dom'
import * as S from './Header.styled'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { RoutesApp } from '../../const'
import { useState, useEffect } from 'react'

export default function Header() {
    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 474)
    const location = useLocation()

const currentPageLabel = {
  '/': 'Мои расходы',
  '/analysis': 'Анализ расходов',
  '/newExpense': 'Новый расход',
}[location.pathname] || 'Мои расходы'


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 474)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    function handleLogout(e) {
        e.preventDefault()
        logout()
        navigate(RoutesApp.SIGN_IN)
    }
return (
    <S.Header>
        <S.HeaderBlock>
            <S.HeaderLogo onClick={() => navigate('/')}>
                <S.HeaderLogoImg src="/logo.svg" alt="logo" />
            </S.HeaderLogo>

            {user && (
                <>
                    <S.HeaderNav>
                        {!isMobile ? (
                            <S.HeaderLinks>
                                <S.HeaderNavLink to="/" end>Мои расходы</S.HeaderNavLink>
                                <S.HeaderNavLink to="/analysis">Анализ расходов</S.HeaderNavLink>
                            </S.HeaderLinks>
                        ) : (
                            <S.HeaderLinks>
                                <S.MobileMenuButton onClick={toggleMenu}>
                                    <span>{currentPageLabel}</span>
                                    <S.MobileHeaderLogoImg
                                        alt=""
                                        src="/menu.svg"
                                        $isOpen={isMenuOpen}
                                    />
                                </S.MobileMenuButton>

                                {isMenuOpen && (
                                    <S.MobileDropdown>
                                        <S.MobileHeaderMenuItem $isActive={location.pathname === '/'}>
                                            <S.MobileMenuItemLink
                                                to="/"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Мои расходы
                                            </S.MobileMenuItemLink>
                                        </S.MobileHeaderMenuItem>

                                        <S.MobileHeaderMenuItem $isActive={location.pathname === '/newExpense'}>
                                            <S.MobileMenuItemLink
                                                to="/newExpense"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Новый расход
                                            </S.MobileMenuItemLink>
                                        </S.MobileHeaderMenuItem>

                                        <S.MobileHeaderMenuItem $isActive={location.pathname === '/analysis'}>
                                            <S.MobileMenuItemLink
                                                to="/analysis"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Анализ расходов
                                            </S.MobileMenuItemLink>
                                        </S.MobileHeaderMenuItem>
                                    </S.MobileDropdown>
                                )}
                            </S.HeaderLinks>
                        )}
                    </S.HeaderNav>

                    <S.HeaderLinkExitText onClick={handleLogout}>
                        Выход
                    </S.HeaderLinkExitText>
                </>
            )}
        </S.HeaderBlock>
    </S.Header>
)
}
















//     return (
//         <S.Header>
//             <S.HeaderBlock>
//                 <S.HeaderLogo
//                     onClick={() => {
//                         navigate('/')
//                     }}
//                 >
//                     <S.HeaderLogoImg src="/logo.svg" alt="logo" />
//                 </S.HeaderLogo>

//                 {user && (
//                     <>
//                         <S.HeaderNav>
//                             {!isMobile ? (
//                                 <S.HeaderLinks>
//                                     <S.HeaderNavLink to="/">
//                                         Мои расходы
//                                     </S.HeaderNavLink>
//                                     <S.HeaderNavLink to="/analysis">
//                                         Анализ расходов
//                                     </S.HeaderNavLink>
//                                 </S.HeaderLinks>
//                             ) : (
//                                 <S.HeaderLinks>
//                                     <S.MobileMenuButton
//                                         onClick={toggleMenu}
//                                         $isOpen={isMenuOpen}
//                                     >
//                                         <S.HeaderNavLink to="/">
//                                             Мои расходы
//                                         </S.HeaderNavLink>

//                                         <S.MobileHeaderLogoImg
//                                             alt=""
//                                             src="/menu.svg"
//                                             $isOpen={isMenuOpen}
//                                         />
//                                     </S.MobileMenuButton>
//                                     {isMenuOpen && (
//                                         <S.MobileDropdown>
//                                             <S.MobileDropdownLink
//                                                 to="/"
//                                                 onClick={() =>
//                                                     setIsMenuOpen(false)
//                                                 }
//                                             >
//                                                 <S.MobileHeaderMenuItem
//                                                     $isActive={true}
//                                                 >
//                                                     <S.MobileMenuItemLink>
//                                                         Мои расходы
//                                                     </S.MobileMenuItemLink>
//                                                 </S.MobileHeaderMenuItem>
//                                                 <S.MobileHeaderMenuItem>
//                                                     <S.MobileMenuItemLink to="/newExpense">
//                                                         Новый расход
//                                                     </S.MobileMenuItemLink>
//                                                 </S.MobileHeaderMenuItem>
//                                                 <S.MobileHeaderMenuItem>
//                                                     <S.MobileMenuItemLink to="/analysis">
//                                                         Анализ расходов
//                                                     </S.MobileMenuItemLink>
//                                                 </S.MobileHeaderMenuItem>
//                                             </S.MobileDropdownLink>
//                                         </S.MobileDropdown>
//                                     )}
//                                 </S.HeaderLinks>
//                             )}
//                         </S.HeaderNav>

//                         <S.HeaderLinkExitText onClick={handleLogout}>
//                             Выход
//                         </S.HeaderLinkExitText>
//                     </>
//                 )}
//             </S.HeaderBlock>
//         </S.Header>
//     )
// }

// import * as S from "./Header.styled";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { RoutesApp } from "../../const";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const { logout, user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 474);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 474);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   function handleLogout(e) {
//     e.preventDefault();
//     logout();
//     navigate(RoutesApp.SIGN_IN);
//   }

//   return (
//     <S.Header>
//       <S.HeaderBlock>
//         <S.HeaderLogo
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           <S.HeaderLogoImg src="/logo.svg" alt="logo" />
//         </S.HeaderLogo>

//         {user && (
//           <>
//             <S.HeaderNav>
//               {!isMobile ? (
//                 <S.HeaderLinks>
//                   <S.HeaderNavLink to="/">Мои расходы</S.HeaderNavLink>
//                   <S.HeaderNavLink to="/analysis">
//                     Анализ расходов
//                   </S.HeaderNavLink>
//                 </S.HeaderLinks>
//               ) : (
//                 <S.HeaderLinks>
//                   <S.MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
//                     <S.HeaderNavLink to="/">Мои расходы</S.HeaderNavLink>

//                     <S.MobileHeaderLogoImg
//                       alt=""
//                       src="/Polygon.svg"
//                       $isOpen={isMenuOpen}
//                     />
//                   </S.MobileMenuButton>
//                   {isMenuOpen && (
//                     <S.MobileDropdown>
//                       <S.MobileDropdownLink
//                         to="/"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <S.MobileHeaderMenuItem $isActive={true}>
//                           <S.MobileMenuItemLink>
//                             Мои расходы
//                           </S.MobileMenuItemLink>
//                         </S.MobileHeaderMenuItem>
//                         <S.MobileHeaderMenuItem>
//                           <S.MobileMenuItemLink to="/newExpense">
//                             Новый расход
//                           </S.MobileMenuItemLink>
//                         </S.MobileHeaderMenuItem>
//                         <S.MobileHeaderMenuItem>
//                           <S.MobileMenuItemLink to="/analysis">
//                             Анализ расходов
//                           </S.MobileMenuItemLink>
//                         </S.MobileHeaderMenuItem>
//                       </S.MobileDropdownLink>
//                     </S.MobileDropdown>
//                   )}
//                 </S.HeaderLinks>
//               )}
//             </S.HeaderNav>

//             <S.HeaderLinkExitText onClick={handleLogout}>
//               Выход
//             </S.HeaderLinkExitText>
//           </>
//         )}
//       </S.HeaderBlock>
//     </S.Header>
//   );
// }
