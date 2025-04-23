import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import AuthForm from "../../components/AuthForm/AuthForm";
import { GlobalStyles } from "../../GlobalStyles.styled";

function MainPage() {

const isSignUp = false
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main />
      < AuthForm isSignUp= {isSignUp}/>
    </div>
  );
}

export default MainPage;
