import styled from 'styled-components'
import { textSizes } from '../../const'
import { inputColors } from '../../const'

export const BasisInput = styled.input`
    width: 100%;
    max-width: 313px;
    height: 39px;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0 12px;
    border: 0.5px solid;
    outline: none;
    border-color: ${({ hasError, isFocused }) =>
        hasError
            ? inputColors.error.border
            : isFocused
            ? inputColors.active.border
            : inputColors.static.border};

    background: ${({ hasError, isFocused }) =>
        hasError
            ? inputColors.error.background
            : isFocused
            ? inputColors.active.background
            : inputColors.static.background};

    &::placeholder {
        color: rgba(148, 166, 190, 0.4);
        font-weight: ${textSizes.small.fontWeight};
        font-size: ${textSizes.small.fontSize};
        opacity: 1;
    }
`
