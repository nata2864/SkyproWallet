import styled from 'styled-components'
import { textSizes } from '../../const'
import { buttonStyles } from '../../const'

export const BasisButton = styled.button`
    width: 100%;
    height: 39px;
    border-radius: 6px;
    padding: 12px;

    background-color: ${({ hasError }) =>
        hasError ? buttonStyles.error.color : buttonStyles.active.color};
    color: #fff;
    font-family: var(--font-main);
    font-weight: ${textSizes.medium.fontWeight};
    font-size: ${textSizes.small.fontSize};
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
