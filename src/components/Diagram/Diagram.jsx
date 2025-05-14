import * as S from './Diagram.styled'
let expenses = [
    { name: 'Еда', latinName: 'food', value: 0, color: '#D9B6FF' },
    { name: 'Транспорт', latinName: 'transport', value: 0, color: '#FFB53D' },
    { name: 'Жилье', latinName: 'housing', value: 0, color: '#6EE4FE' },
    { name: 'Развлечения', latinName: 'joy', value: 0, color: '#B0AEFF' },
    { name: 'Образование', latinName: 'education', value: 0, color: '#BCEC30' },
    { name: 'Другое', latinName: 'others', value: 0, color: '#FFB9B8' },
]
export default function Diagram({ diagramData = {} }) {
    const max = Math.max(...expenses.map((e) => e.value))
    let totalSum = 0
    expenses = expenses.map((item) => {
        const value = diagramData[item.latinName] || 0
        totalSum += value
        return { ...item, value }
    })
    return (
        <S.Wrapper>
            <S.Total>
                <S.TotalAmount>{totalSum} ₽</S.TotalAmount>
                <S.Subtext>
                    Расходы за <S.SubtextSpan>10 июля 2024</S.SubtextSpan>{' '}
                </S.Subtext>
            </S.Total>

            <S.Chart>
                {expenses.map(({ name, value, color }) => (
                    <S.BarBlock key={name}>
                        <S.ValueText>{value} ₽</S.ValueText>
                        <S.Bar
                            height={max > 0 ? (value / max) * 100 : 0}
                            style={{ backgroundColor: color }}
                        />
                        <S.Label>{name}</S.Label>
                    </S.BarBlock>
                ))}
            </S.Chart>
        </S.Wrapper>
    )
}
