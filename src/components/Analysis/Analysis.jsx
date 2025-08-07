import { useState, useEffect, useCallback, useContext } from 'react';
import Diagram from '../Diagram/Diagram';
import Calendar from '../Calendar/Calendar';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import * as S from './Analysis.styled';
import { ExpenseContext } from '../../context/ExpenseContext';
import { getDataPeriod } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import { sortByCategorie } from '../../utils/utils';
import { useViewport } from '../../hooks/useViewport';

const DiagramView = ({ diagramData, period }) => (
  <S.AnalysisTableContainer>
    <S.AnalysisTableHeaderblock>
      <Diagram diagramData={diagramData} period={period} />
      <S.AnalysisTableHeaderFilterBlock />
    </S.AnalysisTableHeaderblock>
  </S.AnalysisTableContainer>
);

const CalendarView = ({ onRangeChange, onDayClick, setMode, filter, selectedDate }) => {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return (
    <S.AnalysisCalendarContainer>
      <S.CalendarHeaderContainer>
        <S.CalendarHeader>
          <S.CalendarHeaderTitle>Период</S.CalendarHeaderTitle>
          <S.CalendarFilterLinks>
            <S.CalendarNavLink onClick={() => setMode(true)} $active={filter}>
              Месяц
            </S.CalendarNavLink>
            <S.CalendarNavLink onClick={() => setMode(false)} $active={!filter}>
              Год
            </S.CalendarNavLink>
          </S.CalendarFilterLinks>
        </S.CalendarHeader>
        <S.CalendarWeekDays>
          {daysOfWeek.map((day) => (
            <S.CalendarWeekDayBlock key={day}>
              <S.CalendarWeekDay>{day}</S.CalendarWeekDay>
            </S.CalendarWeekDayBlock>
          ))}
        </S.CalendarWeekDays>
      </S.CalendarHeaderContainer>
      <S.CalendarBody>
        {filter ? (
          <Calendar onRangeChange={onDayClick} selectedDate={selectedDate} />
        ) : (
          <CalendarMonth onRangeChange={onRangeChange} />
        )}
      </S.CalendarBody>
    </S.AnalysisCalendarContainer>
  );
};

function Analysis() {
  const { expenses } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);
  const [filter, setMode] = useState(true);
  const [period, setPeriod] = useState('все время');
  const [diagramData, setDiagramData] = useState({});
  const [showCalendarMobile, setShowCalendarMobile] = useState(false);
  const isMobile = useViewport(451);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleCalendar = () => {
    setShowCalendarMobile((prev) => !prev);
  };

  const handleRangeChange = useCallback(
    async (range) => {
      if (!range?.start || !range?.end) return;

      const startDate = new Date(range.start);
      const endDate = new Date(range.end);
      const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
      };
      const formatRange = (start, end) => {
        const options = {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        };
        const startStr = start.toLocaleDateString('ru-RU', options);
        const endStr = end.toLocaleDateString('ru-RU', options);
        return `${startStr} – ${endStr}`;
      };

      setPeriod(formatRange(startDate, endDate));
      
      if (isMobile) {
        setShowCalendarMobile(false);
      }

      try {
        const result = await getDataPeriod({
          token: user.token,
          period: {
            start: formatDate(startDate),
            end: formatDate(endDate),
          },
        });
        setDiagramData(sortByCategorie(result));
      } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
      }
    },
    [user.token, isMobile]
  );

  // Так как был баг ждем два нажатия
  const handleDaySelectionMobile = (range) => {
    const day = new Date(range.start); 

    if (!selectedDate) {
      setSelectedDate(day);
    } else {
      const startDate = selectedDate < day ? selectedDate : day;
      const endDate = selectedDate < day ? day : selectedDate;
      handleRangeChange({ start: startDate, end: endDate });
      setSelectedDate(null);
    }
  };
  
  // Если Мобильная то для мобильной
  const calendarDayChangeHandler = isMobile ? handleDaySelectionMobile : handleRangeChange;

  useEffect(() => {
    if (expenses?.length > 0) {
      setDiagramData(sortByCategorie(expenses));
    }
  }, [expenses]);

  return (  
    <S.Analysis>
      {(isMobile && showCalendarMobile)&&  <S.ToAnalysis onClick={toggleCalendar}><img src="/first-box/to-expenses.svg" alt="выход на страницу анализа"></img>
      <img src="/first-box/my-analysis.svg" alt="Мои расходы" /></S.ToAnalysis>}
      <S.AnalysisHeader $isCalendarOpen={!showCalendarMobile}>Анализ расходов</S.AnalysisHeader>
      <S.AnalysisExspenseContainer>
        {isMobile ? (
          showCalendarMobile ? (
            <CalendarView
              onRangeChange={handleRangeChange} // Месяца
              onDayClick={calendarDayChangeHandler} // Дни
              setMode={setMode}
              filter={filter}
              selectedDate={selectedDate}
            />
          ) : (
            <DiagramView diagramData={diagramData} period={period} />
          )
        ) : (
          <>
            <CalendarView
              onRangeChange={handleRangeChange}
              onDayClick={calendarDayChangeHandler}
              setMode={setMode}
              filter={filter}
              selectedDate={selectedDate}
            />
            <DiagramView diagramData={diagramData} period={period} />
          </>
        )}
      </S.AnalysisExspenseContainer>

      {isMobile && (
        <S.PeriodButtonBlock>
            <S.PeriodButton type="button" onClick={toggleCalendar}>
              {showCalendarMobile ? 'Выбрать период' : 'Выбрать другой период'}
            </S.PeriodButton>
        </S.PeriodButtonBlock>
      )}
    </S.Analysis>
  );
}

export default Analysis;
