import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import * as S from './Calendar.styled'

export default function Calendar() {
    const [range, setRange] = useState({ from: undefined, to: undefined })

    return (
        <S.CalendarContainer>
            <S.Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={12}
                classNames={
                    {
                        // day_selected: 'my-selected',
                        // day_range_middle: 'my-range-middle',
                        // day_today: 'my-today',
                    }
                }
                modifiersClassNames={
                    {
                        // selected: 'my-selected',
                        // range_middle: 'my-range-middle',
                        // today: 'my-today',
                    }
                }
            />
            {/* <DayPicker
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={12}
      classNames={{
        // day_selected: 'my-selected',
        // day_range_middle: 'my-range-middle',
        // day_today: 'my-today',
      }}
      modifiersClassNames={{
        // selected: 'my-selected',
        // range_middle: 'my-range-middle',
        // today: 'my-today',
      }}
    /> */}
        </S.CalendarContainer>
    )
}
