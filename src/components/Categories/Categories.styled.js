import styled from "styled-components";
import { textSizes } from "../../const";

export const STag = styled.span`
  background-color: ${({ $isActive }) =>
    $isActive ? "rgba(219, 255, 233, 1)" : "#f3f4f6"};
  color: ${({ $isActive }) =>
    $isActive? " rgba(31, 164, 108, 1)" : " rgba(0, 0, 0, 1)"};
  border-radius: 30px;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px 20px 8px 20px;
  img {
    margin-right: 12px;
  }
`;
