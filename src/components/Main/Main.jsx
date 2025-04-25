import * as S from './Main.styled'
import Button from '../Button/Button'

function Main() {
    return (
        <S.Main>
            <p>Это главная страница</p>
            <Button variant="mobile"
            text='Мобильный вариант кнопки'></Button>
                        <Button variant="tablet"
                        error = 'error'
            text='Tablet Variant with Error!'></Button>
        </S.Main>
    )
}

export default Main
