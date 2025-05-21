import { useState, useEffect, useCallback, useContext } from 'react'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import * as S from './Analysis.styled'
import { sortByCategorie } from '../../utils'
import { ExpenseContext } from '../../context/ExpenseContext'
import { getDataPeriod } from '../../services/api'
import { AuthContext } from '../../context/AuthContext'

function Analysis() {
    const { expenses } = useContext(ExpenseContext)
    const { user } = useContext(AuthContext)
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const [filter, setMode] = useState(true)
    const [period, setPeriod] = useState('все время')
    const [diagramData, setDiagramData] = useState({})
    const [isMobile, setIsMobile] = useState(false)
    const [showCalendarMobile, setShowCalendarMobile] = useState(false)
    const toggleCalendar = () => {
        console.log('Нажали на кнопку!')
        setShowCalendarMobile((prev) => !prev)
    }
    const token =  'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k'
    const handleRangeChange = useCallback(
       
        async (range) => {
            if (!range?.start || !range?.end) return

            const startDate = new Date(range.start)
            const endDate = new Date(range.end)
            const formatDate = (date) => {
                const month = date.getMonth() + 1 // месяцы с 0 по 11
                const day = date.getDate()
                // const month = String(date.getMonth() + 1).padStart(2, '0')
                // const day = String(date.getDate()).padStart(2, '0')
                const year = date.getFullYear()
                return `${month}-${day}-${year}`
            }
            const formatRange = (start, end) => {
                const options = {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                }
                const startStr = start.toLocaleDateString('ru-RU', options)
                const endStr = end.toLocaleDateString('ru-RU', options)
                return `${startStr} – ${endStr}`
            }

           
            setPeriod(formatRange(startDate, endDate))

            try {
                const result = await getDataPeriod({
                    // token: user.token,
                    token: token,
                    period: {
                        start: formatDate(startDate),
                        end: formatDate(endDate),

                    },

                    
                })

                setDiagramData(sortByCategorie(result))
            } catch (error) {
                console.error('Ошибка при получении данных:', error.message)
            }
        },
        [user.token]
    )

    useEffect(() => {
        if (expenses?.length > 0) {
            setDiagramData(sortByCategorie(expenses))
        }
    }, [expenses])
    useEffect(() => {
        const handleResize = () => {
            const mobileBreakpoint = 475
            const isNowMobile = window.innerWidth <= mobileBreakpoint
            setIsMobile(isNowMobile)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <S.Analysis>
            <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>
            <S.AnalysisExspenseContainer>
                {(!isMobile || showCalendarMobile) && (
                    <S.AnalysisCalendarContainer>
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
                                        <S.CalendarWeekDay>
                                            {day}
                                        </S.CalendarWeekDay>
                                    </S.CalendarWeekDayBlock>
                                ))}
                            </S.CalendarWeekDays>
                        </S.CalendarHeaderContainer>

                        <S.CalendarBody>
                            {filter ? (
                                <Calendar onRangeChange={handleRangeChange} />
                            ) : (
                                <CalendarMonth
                                    onRangeChange={handleRangeChange}
                                />
                            )}
                        </S.CalendarBody>
                    </S.AnalysisCalendarContainer>
                )}

                {(!isMobile || !showCalendarMobile) && (
                    <S.AnalysisTableContainer>
                        <S.AnalysisTableHeaderblock>
                            <Diagram
                                diagramData={diagramData}
                                period={period}
                            />
                            <S.AnalysisTableHeaderFilterBlock />
                        </S.AnalysisTableHeaderblock>
                    </S.AnalysisTableContainer>
                )}
            </S.AnalysisExspenseContainer>

            <S.PeriodButtonBlock>
                {isMobile && (
                    <S.PeriodButton type="button" onClick={toggleCalendar}>
                        {showCalendarMobile
                            ? 'Выбрать период'
                            : 'Выбрать другой период'}
                    </S.PeriodButton>
                )}
            </S.PeriodButtonBlock>
        </S.Analysis>
    )
}

export default Analysis
