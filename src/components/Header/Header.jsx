import * as S from './Header.styled'
import { Link } from 'react-router-dom'

export default function Header({ isSignUp }) {
    return (
        <S.Header>
            <S.HeaderContainer>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <Link to="" target="_self">
                            {' '}
                            <S.HeaderLogoImg
                                src="/logo.svg"
                                alt="logo"
                            ></S.HeaderLogoImg>
                        </Link>
                    </S.HeaderLogo>
                    <S.HeaderNav isSignUp={isSignUp}>
                        <S.HeaderNavCenter>
                            <S.HeaderLinks>
                                <S.HeaderLinkText>
                                    <Link>Мои расходы</Link>
                                </S.HeaderLinkText>
                                
                                    <Link>
                                    <S.HeaderLinkText>Анализ расходов</S.HeaderLinkText>
                                    </Link>
                                
                            </S.HeaderLinks>
                        </S.HeaderNavCenter>
                    </S.HeaderNav>

                    <S.HeaderLinkText>
                        <Link>Выход</Link>
                    </S.HeaderLinkText>
                </S.HeaderBlock>
            </S.HeaderContainer>
        </S.Header>
    )
}
