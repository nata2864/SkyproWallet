import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'
export const CalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 600px; /* или любое нужное вам значение */
    overflow-y: auto;
    padding-right: 8px; /* небольшой отступ, чтобы не обрезалось */

    /* Кастомный скроллбар (по желанию) */
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }
`

export const Calendar = styled(DayPicker)`
    --rdp-day-height: 40px;
    --rdp-day-width: 40px;
    --rdp-day_button-height: 40px;
    --rdp-day_button-width: 40px;
    --rdp-nav-height: 40px;
    --rdp-cell-width: 40px;
    .my-selected {
        background-color: #c1f0d6;
        color: black;
        border-radius: 50%;
    }

    .my-range-middle {
        background-color: #e5f9ec;
        color: black;
        border-radius: 0;
    }

    .my-today {
        border: 1px solid #00a86b;
    }
`
