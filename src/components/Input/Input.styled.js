import styled from 'styled-components'
import { textSizes } from '../../const'

export const Input = styled.input`
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
    border-color: ${({ state }) =>
        state === 'red'
            ? '#F25050'
            : state === 'green'
            ? '#1FA46C'
            : state === 'white'
            ? '#999999'
            : '#999999'};

    background-color: ${({ state }) =>
        state === 'red'
            ? '#FFEBEB'
            : state === 'green'
            ? '#DBFFE9'
            : state === 'white'
            ? '#fff'
            : '#ffff'};
    color: #000;

    font-family: var(--font-main);
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
    line-height: 100%;
    letter-spacing: 0px;
    text-align: left;
    vertical-align: middle;
    border: 1px solid
        ${({ state }) =>
            state === 'red'
                ? '#F25050'
                : state === 'green'
                ? '#1FA46C'
                : state === 'white'
                ? '#999999'
                : '#999999'};
    outline: none;
    text-indent: 12px;
`
