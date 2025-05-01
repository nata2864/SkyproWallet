import styled from "styled-components";
import { textSizes } from "../../const";

export const STableFirstRowHead = styled.thead`
  color: rgb(153, 153, 153);
  line-height: 15px;
  letter-spacing: 0px;
`;
export const STableFirstRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: start;
  padding-bottom: 6px;

  th {
    font-family: Montserrat;
    font-size: ${textSizes.small.fontSize};
    font-weight: ${textSizes.small.fontWeight};
    text-align: left;
    padding-right: 20px;
  }

  color: rgb(153, 153, 153);
  line-height: 15px;
  letter-spacing: 0px;
  border-bottom: 0.5px solid rgb(153, 153, 153);
`;

export const STableOrderRowHead = styled.thead`
  color: rgb(153, 153, 153);
  font-family: Montserrat;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 15px;
  letter-spacing: 0px;
`;
export const STableOrderRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: start;
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 15px;
  letter-spacing: 0px;
  padding-top: 18px;

  td {
    text-align: left;
    padding-right: 40px;
  }
`;
export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }

  svg {
    display: block;
  }
`;
export const SIcons = styled.td`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;
