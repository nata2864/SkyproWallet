import * as S from './Main.styled'
import Button from '../Button/Button'
import Input from '../Input/Input'

function Main() {
    return (
        <S.Main>
            <p>Это главная страница</p>
            <Input
            variant='desctop'
            type='email'
            placeholder='Введите email'
            
            ></Input>
            <Button variant="mobile"
            text='Мобильный вариант кнопки'></Button>
                        <Button variant="tablet"
                        error = 'error'
            text='Tablet Variant with Error!'></Button>

        </S.Main>
    )
}

export default Main
