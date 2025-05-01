import React, { useState } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isBefore, isWithinInterval } from 'date-fns';
import {
    CalendarWrapper,
    WeekHeader,
    WeekDay,
    MonthContainer,
    MonthTitle,
    DayGrid,
    DayCell,
  } from "./Calendar.styled"

const Calendar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const today = new Date();
    const monthsToShow = 12;
    const months = Array.from({ length: monthsToShow }, (_, i) => addMonths(today, i));
  
    const handleDayClick = (day) => {
      if (!startDate || (startDate && endDate)) {
        setStartDate(day);
        setEndDate(null);
      } else if (startDate && !endDate) {
        if (isBefore(day, startDate)) {
          setStartDate(day);
        } else {
          setEndDate(day);
        }
      }
    };
  
    const isInRange = (day) => {
      if (startDate && endDate) {
        return isWithinInterval(day, { start: startDate, end: endDate });
      }
      return false;
    };
  
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
    return (
      <CalendarWrapper>
        {months.map((monthDate, idx) => {
          const start = startOfMonth(monthDate);
          const end = endOfMonth(monthDate);
          const days = eachDayOfInterval({ start, end });
          const prefixEmptyDays = (start.getDay() + 6) % 7;
  
          return (
            <MonthContainer key={idx}>
              <MonthTitle>{format(monthDate, 'LLLL yyyy')}</MonthTitle>
              <WeekHeader>
                {daysOfWeek.map((day) => (
                  <WeekDay key={day}>{day}</WeekDay>
                ))}
              </WeekHeader>
              <DayGrid>
                {[...Array(prefixEmptyDays)].map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {days.map((day) => (
                  <DayCell
                    key={day.toString()}
                    selected={isSameDay(day, startDate) || isSameDay(day, endDate)}
                    inRange={isInRange(day)}
                    onClick={() => handleDayClick(day)}
                  >
                    {format(day, 'd')}
                  </DayCell>
                ))}
              </DayGrid>
            </MonthContainer>
          );
        })}
      </CalendarWrapper>
    );
  };
  
  export default Calendar;