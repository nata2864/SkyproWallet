import { useState } from 'react'

import { GlobalStyles } from './GlobalStyles.styled'
import './App.css'
import Header from './components/Header/Header'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyles />
            <Header></Header>
        </>
    )
}

export default App
