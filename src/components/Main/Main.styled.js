import styled from "styled-components";

export const SHeader = styled("header")`
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const SMain = styled("main")`
  margin-top: 20px;
  display: flex;
  gap: 1.5rem;
`;

export const STableSection = styled("section")`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  flex: 1;
  overflow: auto;
`;

export const SFormAside = styled("aside")`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  width: 20rem;
`;

export const SSectionTitle = styled("h2")`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const STableFilters = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SSortLink = styled("a")`
  color: #16a34a;
  text-decoration: underline;
`;

export const SExpenseTable = styled("table")`
  width: 100%;
  border-collapse: collapse;
`;

export const SExpenseForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SInput = styled("input")`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

export const SCategoryTags = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const STag = styled("span")`
  background-color: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

export const SSubmitBtn = styled("button")`
  background-color: #16a34a;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  width: 100%;
`;