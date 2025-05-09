import * as S from './Analysis.styled'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { sortByCategorie } from '../../utils'
import { ExpenseContext } from "../../context/ExpenseContext";
// import { data } from 'react-router-dom'

function Analysis() {
    const { expenses } = useContext(ExpenseContext);
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const [filter, setMode] = useState(true)
    // const [expenses, setData] = useState([])
    // const [period, setPeriod] = useState({})
    const [diagramData, setDiagramData] = useState({})
    // const [diagramSum, setDiagramData] = useState({})
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState('')
    // const { user } = useContext(AuthContext)



console.log(expenses);
    const handleRangeChange = useCallback((range) => {
        if (!range?.start || !range?.end) return
        
        const startDate = new Date(range.start)
        const endDate = new Date(range.end)
        
        const filtered = expenses.filter((item) => {
            const itemDate = new Date(item.date)
            return itemDate >= startDate && itemDate <= endDate
        })
        
        const newDiagramData = sortByCategorie(filtered)
        // Only update if data actually changed
        setDiagramData(prev => {
            if (JSON.stringify(prev) !== JSON.stringify(newDiagramData)) {
                return newDiagramData
            }
            return prev
        })
    }, [expenses])


    useEffect(() => {
        if (expenses?.length > 0) {
            setDiagramData(sortByCategorie(expenses))
        }
    }, [expenses])


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
                        {filter ? (
                            <Calendar
                            onRangeChange={handleRangeChange}
                            />
                        ) : (
                            // <Calendar onRangeChange={handleRangeChange} />
                            <CalendarMonth />
                        )}
                        {/* <Calendar /> */}
                        {/* <CalendarMonth /> */}
                    </S.CalendarBody>
                </S.AnalysisExpenseContainer>

                <S.AnalysisTableContainer>
                    <S.AnalysisTableHeaderblock>
                        <Diagram diagramData={diagramData}></Diagram>
                        {/* <S.AnalysisTableHeader>Таблица расходов</S.AnalysisTableHeader> */}
                        <S.AnalysisTableHeaderFilterBlock></S.AnalysisTableHeaderFilterBlock>
                    </S.AnalysisTableHeaderblock>
                </S.AnalysisTableContainer>
            </S.AnalysisExspenseContainer>
        </S.Analysis>
    )
}

export default Analysis
