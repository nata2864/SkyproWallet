import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import AuthForm from '../../components/AuthForm/AuthForm'
import { GlobalStyles } from '../../GlobalStyles.styled'
import { Wrapper } from './MainPage.styled'

function MainPage() {
    const isSignUp = false
    return (
        <Wrapper>
            <GlobalStyles />
            <Header />
            <Main />
          
            <AuthForm isSignUp={isSignUp} />
        </Wrapper>
    )
}

export default MainPage
