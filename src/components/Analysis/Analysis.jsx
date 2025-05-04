import * as S from './Analysis.styled'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'

function Analysis() {
    return (
        <S.Analysis>
            <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>

            <S.AnalysisExspenseContainer>
                <S.AnalysisExpenseContainer>

                    <S.CalendarHeaderContainer>
                    <S.CalendarHeader>
                        <S.CalendarHeaderTitle>Период</S.CalendarHeaderTitle>

                        <S.CalendarFilterLinks>
                            <S.CalendarNavLink>Месяц</S.CalendarNavLink>
                            <S.CalendarNavLink>Год</S.CalendarNavLink>
                        </S.CalendarFilterLinks>

                    </S.CalendarHeader>
                    <S.CalendarWeekDays>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Пн</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Вт</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Ср</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Чт</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Пт</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Сб</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>
<S.CalendarWeekDayBlock>
    <S.CalendarWeekDay>Вс</S.CalendarWeekDay>
</S.CalendarWeekDayBlock>

                        </S.CalendarWeekDays>
                        </S.CalendarHeaderContainer>
                        <S.CalendarBody>
                        <Calendar />
                        </S.CalendarBody>
                   
                </S.AnalysisExpenseContainer>

                <S.AnalysisTableContainer>
                    <S.AnalysisTableHeaderblock>
                        <Diagram></Diagram>
                        {/* <S.AnalysisTableHeader>Таблица расходов</S.AnalysisTableHeader> */}
                        <S.AnalysisTableHeaderFilterBlock></S.AnalysisTableHeaderFilterBlock>
                    </S.AnalysisTableHeaderblock>
                </S.AnalysisTableContainer>
            </S.AnalysisExspenseContainer>
        </S.Analysis>
    )
}

export default Analysis
