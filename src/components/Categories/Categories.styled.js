import styled from "styled-components";
import { textSizes } from "../../const";

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
