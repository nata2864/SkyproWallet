import React, { useState } from 'react'
import { ru } from "react-day-picker/locale";
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
                locale={ru}
                formatters={{
                    formatMonthCaption: (date, options) =>
                      date.toLocaleDateString('ru-RU', {
                        month: 'long',
                        year: 'numeric',
                      }).replace(/^./, (char) => char.toUpperCase()), // Делает первую букву заглавной
                  }}
                classNames={
                    {
                        day_selected: 'my-selected',
                        day_range_middle: 'my-range-middle',
                        day_today: 'my-today',
                    }
                }
                modifiersClassNames={
                    {
                        selected: 'my-selected',
                        range_middle: 'my-range-middle',
                        today: 'my-today',
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
