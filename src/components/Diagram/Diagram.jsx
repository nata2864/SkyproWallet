import * as S from './Diagram.styled'
const expenses = [
    { name: 'Еда', value: 3590, color: '#D9B6FF' },
    { name: 'Транспорт', value: 1835, color: '#FFB53D' },
    { name: 'Жилье', value: 0, color: '#6EE4FE' },
    { name: 'Развлечения', value: 1250, color: '#B0AEFF' },
    { name: 'Образование', value: 600, color: '#BCEC30' },
    { name: 'Другое', value: 2306, color: '#FFB9B8' },
]

export default function Diagram() {
    const max = Math.max(...expenses.map((e) => e.value))

    return (
        <S.Wrapper>
            <S.Total>
                <S.TotalAmount>9 581 ₽</S.TotalAmount>
                <S.Subtext>
                    Расходы за <S.SubtextSpan>10 июля 2024</S.SubtextSpan>{' '}
                </S.Subtext>
            </S.Total>

            <S.Chart>
                {expenses.map(({ name, value, color }) => (
                    <S.BarBlock key={name}>
                        <S.ValueText>{value} ₽</S.ValueText>
                        <S.Bar
                            height={(value / max) * 100}
                            style={{ backgroundColor: color }}
                        />
                        <S.Label>{name}</S.Label>
                    </S.BarBlock>
                ))}
            </S.Chart>
        </S.Wrapper>
    )
}

// import { useEffect, useState } from 'react'
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
// import styled from 'styled-components'
// import axios from 'axios'
// import * as S from './Diagram.styled'

// const API_URL = '/api/expenses' // заменишь на свой реальный адрес

// export default function ExpensesChart() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     axios.get(API_URL)
//       .then(res => setData(res.data))
//       .catch(err => console.error('Ошибка загрузки данных:', err))
//   }, [])

//   const total = data.reduce((sum, item) => sum + item.value, 0)

//   return (
//     <S.Wrapper>
//       <S.Total>
//         <S.TotalAmount>{total.toLocaleString()} ₽</S.TotalAmount>
//         <S.SubtextSubtext>Расходы за 10 июля 2024</S.SubtextSubtext>
//       </S.Total>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip formatter={(value) => `${value} ₽`} />
//           <Bar
//             dataKey="value"
//             animationDuration={800}
//             radius={[10, 10, 0, 0]}
//             label={{ position: 'top', formatter: (value) => `${value} ₽` }}
//           >
//             {data.map((entry, index) => (
//               <Cell key={index} fill={entry.color} />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </S.Wrapper>
//   )
// }
