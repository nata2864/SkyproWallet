import * as S from './Header.styled'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesApp } from '../../const'
// import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'
import { BsFillCaretDownFill } from "react-icons/bs";

export default function Header() {
    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 474)
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
                <S.HeaderLogo
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <S.HeaderLogoImg src="/logo.svg" alt="logo" />
                </S.HeaderLogo>

                {user && (
                    <>
                        <S.HeaderNav>
                            {!isMobile ? (
                                <S.HeaderLinks>
                                    <S.HeaderNavLink to="/expenses">
                                        Мои расходы
                                    </S.HeaderNavLink>
                                    <S.HeaderNavLink to="/analysis">
                                        Анализ расходов
                                    </S.HeaderNavLink>
                                </S.HeaderLinks>
                            ) : (
                                <S.HeaderLinks>

                                    <S.HeaderNavLink to="/expenses">
                                        Мои расходы
                                    </S.HeaderNavLink>
                                    <S.MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
                                        <S.MobileHeaderLogoImg alt='' src='/Polygon.svg' $isOpen={isMenuOpen} />
                                    </S.MobileMenuButton>
                                    {isMenuOpen && (
                                        <S.MobileDropdown>
                                            <S.MobileDropdownLink
                                                to="/analysis"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                <S.MobileHeaderMenuItem>
                                               Мои расходы
                                                </S.MobileHeaderMenuItem>
                                                <S.MobileHeaderMenuItem>
                                               Новый расход
                                                </S.MobileHeaderMenuItem>
                                                <S.MobileHeaderMenuItem>
                                                Анализ расходов
                                                </S.MobileHeaderMenuItem>
                                            </S.MobileDropdownLink>
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
