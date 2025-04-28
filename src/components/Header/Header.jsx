import * as S from './Header.styled'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesApp } from '../../const'

export default function Header() {
    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(e) {
        e.preventDefault()
        logout()
        navigate(RoutesApp.SIGN_IN)
    }
    return (
        <S.Header>
            <S.HeaderBlock>
                <S.HeaderLogo onClick={() => {navigate('/')}}>
                    <S.HeaderLogoImg src="/logo.svg" alt="logo" />
                </S.HeaderLogo>

                {user && (
                    <>
                        <S.HeaderNav>
                            <S.HeaderLinks>
                                <S.HeaderNavLink to="/expenses">
                                    Мои расходы
                                </S.HeaderNavLink>
                                <S.HeaderNavLink to="/analysis">
                                    Анализ расходов
                                </S.HeaderNavLink>
                            </S.HeaderLinks>
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
