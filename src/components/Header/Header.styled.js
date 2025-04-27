import styled from 'styled-components'

export const Header = styled.header`
    background-color: #ffffff;
`

export const HeaderContainer = styled.div`
    padding-left: calc(8.33%);
    padding-right: calc(8.33%);

    display: 'flex';
    justify-content: 'space-between';
    align-items: 'center';
`

export const HeaderBlock = styled.div`
    /* height: 70px; */
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    align-self: center;
    /* position: relative;
    top: 0;
    left: 0; */
    /* padding: 0 10px; */
`
export const HeaderLogo = styled.div``

export const HeaderLogoImg = styled.img`
    width: 144px;
    height: 19px;
`

export const HeaderNav = styled.nav`
    display: 'flex';
    /* display: ${({ isSignUp }) => (isSignUp ? 'flex' : 'none')};
    gap: '40px'; */
    align-items: 'center';
`

export const HeaderNavCenter = styled.div`
    display: 'flex';

    align-items: 'center';
`

export const HeaderLinks = styled.div`
    display: flex;
    gap: 48px;
    a {
        outline: none;
    };
     &:active{
       color:#1FA46C;
       text-decoration: underline;
    };
    &:hover {
        color:#1FA46C;
    }

`
export const HeaderLinkText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0px;
    text-align: center;
    a {
        outline: none;
    };
     &:active{
       color:#1FA46C;
       text-decoration: underline;
    };
    &:hover {
        color:#1FA46C;
    }
`
