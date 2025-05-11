import styled from "styled-components";
import { textSizes } from "../../const";

export const SMain = styled.main`
  background: rgb(244, 245, 246);
  padding-left: 118px;
  padding-right: 120px;
  padding-bottom: 72px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
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
  margin-top: 32px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: space-between;
  margin-right: 34px;
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
`;
export const STableFiltersGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SSortLink = styled.a`
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: ${textSizes.medium.fontWeight};
`;
export const SCategoryLink = styled.a`
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: ${textSizes.medium.fontWeight};
`;

export const SExpenseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const STableBodyWrapper = styled.tbody`
  display: block;
  max-height: 618px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
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

export const SInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-top: 16px;
  color: rgb(153, 153, 153);
  font-family: Montserrat;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`;

export const SCategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
`;

export const STag = styled.span`
  background-color: #f3f4f6;
  border-radius: 30px;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12;
  padding: 8px 20px 8px 20px;
  img {
    margin-right: 12px;
  }
`;

export const SSubmitBtn = styled.button`
  background: rgb(31, 164, 108);
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.medium.fontWeight};
`;
export const SCategoryFiltration = styled.div`
  width: 176px;
  position: absolute;
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  border: 0.5px solid rgb(153, 153, 153);
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  top: 20px;
  right: 0px;
`;
export const SCategoryFiltrationElement = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px 8px 20px;
  border-radius: 30px;
  background: ${(props) =>
    props.$isSelected ? "rgb(219, 255, 233)" : "rgb(244, 245, 246)"};
  width: fit-content;
  color: ${(props) =>
    props.$isSelected ? "rgb(31, 164, 108)" : "rgb(0, 0, 0)"};
  > img {
    margin-right: 12px;
    filter: ${(props) =>
      props.$isSelected
        ? "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(91%) contrast(87%)"
        : "brightness(0) saturate(100%)"};
  }
`;
export const SSorting = styled.div`
  width: 106px;
  position: absolute;
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  border: 0.5px solid rgb(153, 153, 153);
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  top: 20px;
  right: 0px;
`;
export const SSortingElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 20px 8px 20px;
  border-radius: 30px;
  background: ${(props) =>
    props.$isSelected ? "rgb(219, 255, 233)" : "rgb(244, 245, 246)"};
  width: fit-content;
  color: ${(props) =>
    props.$isSelected ? "rgb(31, 164, 108)" : "rgb(0, 0, 0)"};
  > img {
    margin-right: 12px;
    filter: ${(props) =>
      props.$isSelected
        ? "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(91%) contrast(87%)"
        : "brightness(0) saturate(100%)"};
  }
`;
