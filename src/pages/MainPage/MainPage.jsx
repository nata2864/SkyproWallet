import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import AuthForm from "../../components/AuthForm/AuthForm";

function MainPage() {
  const isSignUp = false;
  return (
    <>
      <Header />
      <Main />
      <AuthForm isSignUp={isSignUp} />
    </>
  );
}

export default MainPage;
