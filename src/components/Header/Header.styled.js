import styled from "styled-components";

export const SHeader = styled("header")`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const SLogo = styled("div")`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const SNav = styled("nav")`
  display: flex;
  gap: 1.5rem;
`;

export const SNavLink = styled("a")`
  color: #4b5563;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

export const SActiveLink = styled("a")`
  color: #16a34a;
  font-weight: 500;
  text-decoration: none;
`;

export const SLogoutBtn = styled("button")`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
`;
