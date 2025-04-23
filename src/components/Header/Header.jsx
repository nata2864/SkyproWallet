import {
  SHeader,
  SLogo,
  SNav,
  SActiveLink,
  SNavLink,
  SLogoutBtn,
} from "./Header.styled";
import WalletLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <SHeader>
      <SLogo>
        <img src={WalletLogo} alt="logo" />
      </SLogo>
      <SNav>
        <SActiveLink href="#">Мои расходы</SActiveLink>
        <SNavLink href="#">Анализ расходов</SNavLink>
      </SNav>
      <SLogoutBtn>Выйти</SLogoutBtn>
    </SHeader>
  );
}
