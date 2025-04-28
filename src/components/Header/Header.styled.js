import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { textSizes } from '../../const'
import { NavLink } from 'react-router-dom'
import { buttonStyles } from '../../const'

export const Header = styled.header`
    width: 100%;
    height: 64px;
    margin: 0 auto;
    background-color: #ffffff;
`

export const HeaderBlock = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;

    padding-left: calc(8.3%);
    padding-right: calc(8.3%);
`

export const HeaderLinkText = styled(Link)`
    font-weight: ${textSizes.smallHeader.fontWeight};
    font-size: ${textSizes.smallHeader.fontSize};
    line-height: 170%;
    letter-spacing: 0px;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #000;
`

export const HeaderLinkExitText = styled(HeaderLinkText)`
    font-weight: 600;
    &:hover {
        color: ${buttonStyles.active.color};
        transition: all 0.3s ease;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: block;
    display: 'flex';
    justify-content: 'space-between';
    align-items: 'center';
    padding: '10px 40px';
    border-bottom: '1px solid #eee';
`

export const HeaderLogo = styled(Link)`
    cursor: pointer;
    outline: none;
`

export const HeaderLogoImg = styled.img`
    width: 144px;
    height: 19px;
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
export const HeaderNavLink = styled(NavLink)`
    font-weight: ${textSizes.smallHeader.fontWeight};
    font-size: ${textSizes.smallHeader.fontSize};
    line-height: 170%;
    text-align: center;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease;

    &.active {
        color: #27ae60; /* Зеленый */
        font-weight: 600; /* Semibold */
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    &:hover {
        color: ${buttonStyles.active.color};
        transition: all 0.3s ease;
    }
`
