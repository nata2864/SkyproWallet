import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import AuthForm from "../../components/AuthForm/AuthForm";

function MainPage() {

const isSignUp = false
  return (
    <div>
      <Header />
      <Main />
      < AuthForm isSignUp= {isSignUp}/>
    </div>
  );
}

export default MainPage;
