import * as S from './Analysis.styled'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import { getDataPeriod } from '../../services/api'
import { AuthContext } from '../../context/AuthContext'
import { sortByCategorie } from '../../utils'
// import { data } from 'react-router-dom'

function Analysis() {
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const [filter, setMode] = useState(true)
    const [expenses, setData] = useState([])
    // const [period, setPeriod] = useState({})
    const [diagramData, setDiagramData] = useState({})
    // const [diagramSum, setDiagramData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                setLoading(true)
                const data = await getDataPeriod({
                    token: user.token,
                    params: {},
                })
                if (data) {
                    setData(data)
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchExpenses()
    }, [user.token])

    // Обработка изменения диапазона
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


    // Мемоизированные данные для диаграммы
    // const diagramData = useMemo(() => {
    //     return sortByCategorie(expenses) // начальное состояние - все данные
    // }, [expenses])

    // const getExpenses = useCallback(async (period) => {
    //     try {
    //         setLoading(true)
    //         const data = await getDataPeriod({
    //             token: user.token,
    //             params: period,
    //         })
    //         if (data) setData(data)
    //            setDiagramData(sortByCategorie(data))

    //     } catch (err) {
    //         setError(err.message)
    //     } finally {
    //         setLoading(false)

    //     }
    // }, [])

    // const getExpenses = useCallback(async (period) => {
    //     try {
    //         setLoading(true)
    //         const data = await getDataPeriod({
    //             token: user.token,
    //             params: period,
    //         })
    //         if (data) setData(data)
    //         setDiagramData(sortByCategorie(data)) // сохраняем все данные, фильтрация будет позже
    //     } catch (err) {
    //         setError(err.message)
    //     } finally {
    //         setLoading(false)
    //     }
    // }, [])

    // useEffect(() => {
    //     const fetchExpenses = async () => {
    //         try {
    //             setLoading(true)
    //             const data = await getDataPeriod({
    //                 token: user.token,
    //                 params: {}, // или передай диапазон по умолчанию
    //             })
    //             if (data) {
    //                 setData(data)
    //                 setDiagramData(sortByCategorie(data)) // стартовая диаграмма
    //             }
    //         } catch (err) {
    //             setError(err.message)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchExpenses()
    // }, [user.token])

    // useEffect(() => {
    //     if (user?.token) {
    //         getExpenses(period)
    //     }
    // }, [getExpenses, user])

    // const handleRangeChange = (range) => {
    //     const { start, end } = range

    //     const filtered = expenses.filter((item) => {
    //         const itemDate = new Date(item.date)
    //         const startDate = new Date(start)
    //         const endDate = new Date(end)

    //         return itemDate >= startDate && itemDate <= endDate
    //     })
    //     console.log(filtered)

    //     setDiagramData(sortByCategorie(filtered))
    // }

    // const handleRangeChange = (range) => {
    //     const { start, end } = range

    //     const startDate = new Date(start)
    //     const endDate = new Date(end)

    //     const filtered = expenses.filter((item) => {
    //         const itemDate = new Date(item.date)
    //         return itemDate >= startDate && itemDate <= endDate
    //     })

    //     setDiagramData(sortByCategorie(filtered))
    // }

    // const handleRangeChange = (range) => {
    //     console.log('Передано из Calendar:', range)
    //     // например, setFilters(range), fetchData(range), и т.п.
    // }
    // setDiagramData(sortByCategorie(expenses))

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
                            <Calendar
                                onRangeChange={(range) => {
                                    const data = handleRangeChange(range)
                                    if (data) {
                                        setDiagramData(data)
                                    }
                                }}
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
