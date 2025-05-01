import styled from "styled-components";
import { textSizes } from "../../const";

export const SMain = styled.main`
  background: rgb(244, 245, 246);
  padding-left: 118px;
  padding-right: 120px;
  padding-bottom: 72px;
  box-sizing: border-box;
  width: 1440px;
`;
export const SMainHeader = styled.h1`
  font: var(--font-main);
  font-size: ${textSizes.largeH1.fontSize};
  font-weight: ${textSizes.largeH1.fontWeight};
  color: ${textSizes.largeH1.color};
  padding-top: 36px;
  padding-bottom: 32px;
  margin: 0px;
`;

export const STables = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;
  max-width: 1200px;
`;

export const STableSection = styled.section`
  background: white;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding-left: 32px;
  padding-right: 34px;
  padding-bottom: 7px;
  flex: 1 1 788px;
  overflow: auto;
`;

export const SFormAside = styled.aside`
  background: white;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 32px;
  flex: 0 0 380px;
`;

export const STableHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SSectionTitle = styled.h2`
  font-weight: bold;
`;

export const STableFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SSortLink = styled.a`
  color: #16a34a;
  text-decoration: underline;
`;

export const SExpenseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const SExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

export const SCategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const STag = styled.span`
  background-color: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

export const SSubmitBtn = styled.button`
  background-color: #16a34a;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  width: 100%;
`;
