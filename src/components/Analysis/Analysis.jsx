import * as S from './Analysis.styled'
import Diagram from '../Diagram/Diagram'
import Calendar from '../Calendar/Calendar'

function Analysis() {
    return (
        <S.Analysis>
       <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>

            <S.AnalysisExspenseContainer>
                <Calendar/>
            {/* <S.AnalysisExpenseContainer /> */}
            <S.AnalysisTableContainer>
                <S.AnalysisTableHeaderblock>
                    <Diagram></Diagram>
                    {/* <S.AnalysisTableHeader>Таблица расходов</S.AnalysisTableHeader> */}
                    <S.AnalysisTableHeaderFilterBlock>


                    </S.AnalysisTableHeaderFilterBlock>
                </S.AnalysisTableHeaderblock>
            </S.AnalysisTableContainer>
           
            </S.AnalysisExspenseContainer>

        </S.Analysis>
    )
}

export default Analysis
