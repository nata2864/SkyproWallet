import * as S from './Analysis.styled'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import { useState} from 'react'


function Analysis() {
       const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
      const [filter, setMode] = useState(true)

    return (
        <S.Analysis>
            <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>

            <S.AnalysisExspenseContainer>
                <S.AnalysisExpenseContainer>
                    <S.CalendarHeaderContainer>
                        <S.CalendarHeader>
                            <S.CalendarHeaderTitle>
                                Период
                            </S.CalendarHeaderTitle>

                            <S.CalendarFilterLinks>
                                <S.CalendarNavLink
                                    onClick={() => setMode(true)}
                                    $active={filter}
                                >
                                    Месяц
                                </S.CalendarNavLink>
                                <S.CalendarNavLink
                                    onClick={() => setMode(false)}
                                    $active={!filter}
                                >
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
                    {filter ? ( <Calendar /> ) : (<CalendarMonth />)}
                        {/* <Calendar /> */}
                        {/* <CalendarMonth /> */}
                    </S.CalendarBody>
                </S.AnalysisExpenseContainer>

                <S.AnalysisTableContainer>
                    <S.AnalysisTableHeaderblock>
                        <Diagram
                            // diagramData={diagramData}
                            // period={period}
                        ></Diagram>
                        {/* <S.AnalysisTableHeader>Таблица расходов</S.AnalysisTableHeader> */}
                        <S.AnalysisTableHeaderFilterBlock></S.AnalysisTableHeaderFilterBlock>
                    </S.AnalysisTableHeaderblock>
                </S.AnalysisTableContainer>
            </S.AnalysisExspenseContainer>
        </S.Analysis>
    )
}

export default Analysis
