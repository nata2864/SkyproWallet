import * as S from './Main.styled'
import Button from '../Button/Button'
import BasisInput from '../Input/Input'

function Main() {
    return (
        <S.Main>
            <S.MainHeader>Мои расходы</S.MainHeader>

            <S.MainExspenseContainer>
            <S.MainTableContainer>
                <S.MainTableHeaderblock>
                    <S.MainTableHeader>Таблица расходов</S.MainTableHeader>
                    <S.MainTableHeaderFilterBlock>


                    </S.MainTableHeaderFilterBlock>
                </S.MainTableHeaderblock>
            </S.MainTableContainer>
            <S.MainExpenseContainer></S.MainExpenseContainer>
            </S.MainExspenseContainer>

        </S.Main>
    )
}

export default Main
