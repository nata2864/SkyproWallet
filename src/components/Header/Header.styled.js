import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textSizes } from '../../const'

export const Header = styled.header`
    width: 100%;
    height: 64px;
    margin: 0 auto;
    background-color: #ffffff;
`

export const HeaderBlock = styled.div`
    // height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

export const HeaderLinkText = styled(Link)`
    font-weight: ${textSizes.smallHeader.fontWeight};
    font-size: ${textSizes.smallHeader.fontSize};
    line-height: 170%;
    letter-spacing: 0px;
    text-align: center;
`

export const HeaderLinkExitText = styled(HeaderLinkText)`
    font-weight: 600;
`

export const HeaderContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    display: block;
    display: 'flex';
    justify-content: 'space-between';
    align-items: 'center';
    padding: '10px 40px';
    border-bottom: '1px solid #eee';
`

export const HeaderLogo = styled.div``

export const HeaderLogoImg = styled.img`
    width: 144px;
    height: 19px;
    padding: 23px 120px;
`

export const HeaderNav = styled.nav`
    display: 'flex';
    gap: '40px';
    align-items: 'center';
`
export const HeaderLinks = styled.div`
    display: flex;
    gap: 48px;
`
