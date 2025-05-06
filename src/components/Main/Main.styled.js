import styled from "styled-components";
import { textSizes } from "../../const";

export const SMain = styled.main`
  background: rgb(244, 245, 246);
  padding-left: 118px;
  padding-right: 120px;
  padding-bottom: 72px;
  box-sizing: border-box;
  width: 100%;
`;
export const SMainHeader = styled.h1`
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

export const STableHeader = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: space-between;
`;

export const SSectionTitle = styled.h2`
  font-weight: ${textSizes.largeH2.fontWeight};
  font-size: ${textSizes.largeH2.fontSize};
`;

export const STableFilters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${textSizes.small.fontSize};
  gap: 24px;
  div {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
`;

export const SSortLink = styled.a`
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: ${textSizes.medium.fontWeight};
`;

export const SExpenseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const SExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  label {
    font-weight: ${textSizes.medium.fontWeight};
    font-size: ${textSizes.medium.fontSize};
  }
`;
