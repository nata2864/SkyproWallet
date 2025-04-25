import * as S from './Button.styled'

export default function Button({variant, text, error}) {
    return <S.Button
    variant={variant}
    error={error}
    >{text}</S.Button>
}
