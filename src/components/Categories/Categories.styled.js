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

  gap: 6px;
  padding: 8px 20px 8px 20px;
  img {
    margin-right: 12px;
     filter: ${(props) =>
      props.$isActive
    ? "brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(75%) contrast(80%)"
    : "brightness(0) saturate(100%)"};
  }

  }
`;
