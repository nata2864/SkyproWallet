import styled from "styled-components";
import { textSizes } from "../../const";

export const BasisInput = styled.input`

width: 100%;
max-width: 313px;
height: 39px;
box-sizing: border-box;
border-radius: 6px;
gap: 12px;
border: 0.5px solid;
border-color:  #999999
padding: 12px;

  &::placeholder {
    color: #999999; 
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
    opacity: 1; 
  }

`;
