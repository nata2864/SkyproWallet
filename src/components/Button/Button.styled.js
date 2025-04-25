import styled from 'styled-components'
import { textSizes } from '../../const'

export const Button = styled.button`
    width: ${({ variant }) =>
        variant === 'desktop'
            ? '100%'
            : variant === 'mobile'
            ? '343px'
            : variant === 'tablet'
            ? '313px'
            : 'none'};
    height: 39px;
    border-radius: 6px;
    padding: 12px;

    background-color: ${({ error }) => (error ? '#999999' : '#1fa46c')};
    color: #fff;
    font-family: var(--font-main);
    font-weight: ${textSizes.medium.fontWeight};
    font-size: ${textSizes.small.fontSize};
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
