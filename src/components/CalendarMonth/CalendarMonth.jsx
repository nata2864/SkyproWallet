import React, { useState } from 'react'
import * as S from './CalendarMonth.styled'

const years = [2024, 2025, 2026]
const months = [
  'Январь', 'Февраль', 'Март',
  'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь',
  'Октябрь', 'Ноябрь', 'Декабрь'
]

const CalendarMonth = () => {
//   const [mode, setMode] = useState('год') // или 'месяц'
  const [selected, setSelected] = useState([])

  const toggleMonth = (year, monthIndex) => {
    const key = `${year}-${monthIndex}`
    setSelected(prev =>
      prev.includes(key)
        ? prev.filter(m => m !== key)
        : [...prev, key]
    )
  }

  return (
    <S.Container>
      {/* <S.Header>
        <S.Title>Период</S.Title>
        <S.ModeSwitch>
          <S.ModeButton
            active={mode === 'месяц'}
            onClick={() => setMode('месяц')}
          >
            Месяц
          </S.ModeButton>
          <S.ModeButton
            active={mode === 'год'}
            onClick={() => setMode('год')}
          >
            Год
          </S.ModeButton>
        </S.ModeSwitch>
      </S.Header> */}

      <S.Content>
        {years.map(year => (
          <div key={year}>
            <S.YearLabel>{year}</S.YearLabel>
            <S.MonthGrid>
              {months.map((month, i) => {
                const key = `${year}-${i}`
                const isSelected = selected.includes(key)
                return (
                  <S.MonthButton
                    key={month}
                    selected={isSelected}
                    onClick={() => toggleMonth(year, i)}
                  >
                    {month}
                  </S.MonthButton>
                )
              })}
            </S.MonthGrid>
          </div>
        ))}
      </S.Content>
    </S.Container>
  )
}

export default CalendarMonth
