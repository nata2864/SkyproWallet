import styled from 'styled-components'
import { textSizes, buttonStyles } from '../../const'
import { NavLink } from 'react-router-dom'

export const Analysis = styled.div`
    color: ${textSizes.largeH1.color};
    background-color: #f1f1f1;
    overflow-x: hidden;
`

export const AnalysisHeader = styled.h1`
    font: var(--font-main);
    font-size: ${textSizes.largeH1.fontSize};
    font-weight: ${textSizes.largeH1.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 36px;
    padding-bottom: 32px;
    padding-left: calc(8.3%);
`
export const AnalysisExspenseContainer = styled.div`
    display: flex;
    gap: 34px;
    padding-left: calc(8.3%);
    padding-right: calc(8.3%);
    box-sizing: border-box;
    width: 100%;
`
export const AnalysisTableContainer = styled.div`
    width: 789px;
    height: 618px;
    border-radius: 30px;
    background-color: #fff;
`
export const AnalysisTableHeaderblock = styled.div`
    display: flex;
`

export const AnalysisTableHeader = styled.h2`
    font: var(--font-main);
    font-size: ${textSizes.largeH2.fontSize};
    font-weight: ${textSizes.largeH2.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 32px;
    padding-left: 32px;
`
export const AnalysisTableHeaderFilterBlock = styled.div`
    display: flex;
`

export const AnalysisExpenseContainer = styled.div`
box-sizing: border-box;
    /* width: 379px; */
    max-width: 400px;
    height: 618px;
    border-radius: 30px;
    background-color: #fff;
`

export const CalendarHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    /* align-items: center; */
    border-bottom: 1px solid #999999;
`

export const CalendarHeader = styled.div`
    display: flex;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    justify-content: space-between;
    align-items: center;
`
export const CalendarHeaderTitle = styled.h2`
    font-size: ${textSizes.largeH2.fontSize};
    font-weight: ${textSizes.largeH2.fontWeight};
`

export const CalendarFilterLinks = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
`

export const CalendarNavLink = styled(NavLink)`
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
    line-height: 150%;
    text-align: center;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease;

    &.active {
        color: #27ae60;
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    &:hover {
        color: ${buttonStyles.active.color};
        transition: all 0.3s ease;
    }
`
export const CalendarWeekDays = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
`
export const CalendarWeekDayBlock = styled.div`
    /* display: flex; */
    align-items: center;
`
export const CalendarWeekDay = styled.p`
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
    padding: 6px 12px;
    line-height: 100%;
`
export const CalendarBody = styled.div`
    padding-top: 24px;
    /* padding-right: 32px; */
    padding-left: 32px;
    box-sizing: border-box;
    /* overflow-y: auto; */
    
`
