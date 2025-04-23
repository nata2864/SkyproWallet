import * as S from './Header.styled'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <S.Header>
            <S.HeaderBlock>
                <S.HeaderLogo>
                    <Link to="" target="_self">
                        {' '}
                        <S.HeaderLogoImg
                            src="public/logo.svg"
                            alt="logo"
                        ></S.HeaderLogoImg>
                    </Link>
                </S.HeaderLogo>
                <S.HeaderNav>
                    <S.HeaderLinks>
                        <S.HeaderLinkText>
                            <Link>Мои расходы</Link>
                        </S.HeaderLinkText>
                        <S.HeaderLinkText>
                            <Link>Анализ расходов</Link>
                        </S.HeaderLinkText>
                    </S.HeaderLinks>
                </S.HeaderNav>
                <S.HeaderLinkText>
                    <Link>Выход</Link>
                </S.HeaderLinkText>
            </S.HeaderBlock>
        </S.Header>
    )
}
