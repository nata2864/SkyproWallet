import styled from "styled-components";

export const SHeader = styled.header`
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-left: 118px;
  padding-right: 120px;
  padding-top: 20px;
  width: 1440px;
  box-sizing: border-box;
`;

export const SLogo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const SNav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const SNavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

export const SActiveLink = styled.a`
  color: #16a34a;
  font-weight: 500;
  text-decoration: underline;
`;

export const SLogoutBtn = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
`;
