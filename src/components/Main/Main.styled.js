import styled from 'styled-components'
import { textSizes } from '../../const'

export const Main = styled.div`
    color: red;
    background-color: #f1f1f1;
    overflow-x: hidden;
`

export const MainHeader = styled.h1`
    font: var(--font-main);
    font-size: ${textSizes.largeH1.fontSize};
    font-weight: ${textSizes.largeH1.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 36px;
    padding-bottom: 32px;
    padding-left: calc(8.3%);
`
export const MainExspenseContainer = styled.div`
    display: flex;
    gap: 34px;
    margin-left: calc(8.3%);
    margin-right: calc(8.3%);
`
export const MainTableContainer = styled.div`
    
    width: 789px;
    height: 618px;
    border-radius: 30px;
    background-color: #fff;
`
export const MainTableHeaderblock = styled.div`
    display: flex;
`

export const MainTableHeader = styled.h2`
    font: var(--font-main);
    font-size: ${textSizes.largeH2.fontSize};
    font-weight: ${textSizes.largeH2.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 32px;
    padding-left: 32px;
`
export const MainTableHeaderFilterBlock = styled.div`
    display: flex;
`

// width: 379;
// height: 618;
// top: 180px;
// left: 941px;
// border-radius: 30px;

export const MainExpenseContainer = styled.div`

    width: 379px;
    height: 618px;
    border-radius: 30px;
    background-color: #fff;
`
