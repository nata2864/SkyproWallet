
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 379px; /* Ширина календаря */
  height: 540px; /* Высота календаря */
  overflow-y: auto; /* Прокрутка по вертикали */
  overflow-x: hidden; /* Прокрутка по горизонтали отключена */
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Центрируем */
`;

export const MonthContainer = styled.div`
  width: 313px; /* Ширина месяца */
  height: 256px; /* Высота месяца */
  margin: 8px 0; /* Отступы между месяцами */
  padding: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

export const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  padding: 4px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const WeekDay = styled.div`
  text-align: center;
  font-weight: 600;
  color: #4a4a4a;
  font-size: 10px; /* Уменьшаем шрифт для дней недели */
`;

export const DayCell = styled.div`
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 50%; /* Круглые ячейки */
  cursor: pointer;
  background-color: ${({ selected, inRange }) =>
    selected ? '#38a169' : inRange ? '#c6f6d5' : 'transparent'};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  width: 40px; /* Фиксированная ширина */
  height: 40px; /* Фиксированная высота */
  margin: 0 auto; /* Центрируем */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ selected, inRange }) =>
      selected ? '#2f855a' : inRange ? '#9ae6b4' : '#e6f4ea'};
  }
`;

export const MonthTitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #2f855a;
`;

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 столбцов */
  gap: 4px;
`;


