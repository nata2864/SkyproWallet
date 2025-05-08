import * as S from './Analysis.styled'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import { useState, useEffect, useCallback, useContext } from 'react'
import { getDataPeriod } from '../../services/api'
import { AuthContext } from '../../context/AuthContext'
import { sortByCategorie } from '../../utils'
// import { data } from 'react-router-dom'

function Analysis() {
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const [filter, setMode] = useState(true)
    const [expenses, setData] = useState([])
    const [period, setPeriod] = useState({})
    const [diagramSum , setDiagramData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)

    const getExpenses = useCallback(async (period) => {
        try {
            setLoading(true)
            const data = await getDataPeriod({
                token: user.token,
                params: period,
            })
            if (data) setData(data)
               setDiagramData(sortByCategorie(data))
                
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
           
        }
    }, [])
    useEffect(() => {
        getExpenses()
    }, [getExpenses])

    const handleRangeChange = (range) => {
        console.log('Передано из Calendar:', range)
        // например, setFilters(range), fetchData(range), и т.п.
    }
    // setDiagramData(sortByCategorie(expenses))
    console.log(diagramSum);
   

    // const handleRangeChange = useCallback( async (range) => {
    //     // console.log(range);
    //     try {
    //         setLoading(true)
    //         const data = await getDataPeriod({
    //             token: user.token,
    //             params: range,
    //         })
    //         if (data) setData(data)
    //     } catch (err) {
    //         setError(err.message)
    //     } finally {
    //         setLoading(false)
            
            
    //     }

    //   }, [])
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
                            <Calendar onRangeChange={handleRangeChange} />
                        ) : (
                            <CalendarMonth />
                        )}
                        {/* <Calendar /> */}
                        {/* <CalendarMonth /> */}
                    </S.CalendarBody>
                </S.AnalysisExpenseContainer>

                <S.AnalysisTableContainer>
                    <S.AnalysisTableHeaderblock>
                        <Diagram
                        diagramData={diagramSum}
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
