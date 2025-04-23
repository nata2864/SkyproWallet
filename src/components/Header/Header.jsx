import * as S from './Header.styled'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <S.Header>
            <S.HeaderBlock>
                <S.HeaderLogo>
                    <Link to="#" target="_self">
                        {' '}
                        <S.HeaderLogoImg
                            src="public/logo.svg"
                            alt="logo"
                        ></S.HeaderLogoImg>
                    </Link>
                </S.HeaderLogo>
            </S.HeaderBlock>
        </S.Header>
    )
}
