import styled from 'styled-components'
import { textSizes, buttonStyles } from '../../const'
import Button from '../Button/Button'
export const Analysis = styled.div`
    color: ${textSizes.largeH1.color};
    /* background-color: #f1f1f1; */
    /* overflow-x: hidden; */
    width: 100%;
    @media (max-width: 600px) {
        background-color: var(--bg-color);
        padding-left: calc(8.3%);
        padding-right: calc(8.3%);
        background: linear-gradient(to bottom, #ffffff 50%, #F4F5F6 100%);
    }
`

export const AnalysisHeader = styled.h1`
    font-size: ${textSizes.largeH1.fontSize};
    font-weight: ${textSizes.largeH1.fontWeight};
    color: ${textSizes.largeH1.color};
    padding-top: 36px;
    padding-bottom: 32px;
    line-height: 150%;
    padding-left: calc(8.3%);
    @media (max-width: 600px) {
        font-size: ${textSizes.largeH2.fontSize};
        line-height: 100%;
        padding-left: 0px;
        padding-top: 24px;
    padding-bottom: 24px;
    }
`
export const AnalysisExspenseContainer = styled.div`
    display: flex;
    gap: 34px;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: calc(8.3%);
    padding-right: calc(8.3%);
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        padding-left: 0px;
    padding-right: 0px;
    
    }
`
export const AnalysisCalendarContainer = styled.div`
    box-sizing: border-box;
    background-color: var(--bg-color);
    width: 100%;
    @media (max-width: 600px) {
        display: none;
    }
`

export const AnalysisTableContainer = styled.div`
    min-width: 789px;
    max-width: 100%;
    height: 618px;
    border-radius: 30px;
    background-color: var(--bg-color);
    @media (max-width: 800px) {
        min-width: 343px;
        max-width: 100%;
        /* padding-left: calc(8.3%);
        padding-right: calc(8.3%); */
    }
    @media (max-width: 600px) {
        min-width: 343px;
        max-width: 100%;
        background: linear-gradient(to bottom, #ffffff 50%, #F4F5F6 100%);
    }
`
export const AnalysisTableHeaderblock = styled.div`
    display: flex;
   
`

export const AnalysisTableHeader = styled.h2`
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
    background-color: var(--bg-color);

`

export const CalendarHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    /* align-items: center; */
    border-bottom: 1px solid #999999;
        @media (max-width: 600px) {
        background: linear-gradient(to bottom, #ffffff 50%, #F4F5F6 100%);
    }
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

export const CalendarNavLink = styled.button`
    /* font-weight: ${textSizes.small.fontWeight};
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
    } */
    background: none;
    border: none;
    font-size: ${textSizes.small.fontSize};
    font-weight: ${(props) => (props.$active ? 600 : 400)};
    color: ${(props) => (props.$active ? '#27ae60' : '#000')};
    text-decoration: ${(props) => (props.$active ? 'underline' : 'none')};
    text-underline-offset: 4px;
    cursor: pointer;

    &:hover {
        color: ${buttonStyles.active.color};
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
    color: #999999;
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
export const PeriodButtonBlock = styled.div`
    padding: 24px 16px;
`
export const PeriodButton = styled(Button)`
    font-size: ${textSizes.small.fontSize};
    font-weight: ${textSizes.small.fontWeight};
    /* color: var(--bg-color); */
    color: white;
`