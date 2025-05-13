import * as S from "./Analysis.styled";
import Diagram from "../Diagram/Diagram";
import Calendar from "../Calendar/Calendar";
import CalendarMonth from "../CalendarMonth/CalendarMonth";
import { useState } from "react";

function Analysis() {
  return (
    <S.Analysis>
      <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>

      <S.AnalysisExspenseContainer>
        <S.AnalysisExpenseContainer />
        <S.AnalysisTableContainer>
          <S.AnalysisTableHeaderblock>
            <Diagram></Diagram>
            {/* <S.AnalysisTableHeader>Таблица расходов</S.AnalysisTableHeader> */}
            <S.AnalysisTableHeaderFilterBlock></S.AnalysisTableHeaderFilterBlock>
          </S.AnalysisTableHeaderblock>
        </S.AnalysisTableContainer>
      </S.AnalysisExspenseContainer>
    </S.Analysis>
  );
}

export default Analysis;
