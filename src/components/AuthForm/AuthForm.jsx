import * as S from "./AithForm.styled";

function AuthForm({ isSignUp }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <div>
              <S.Title>{isSignUp ? "Регистрация" : "Вход"}</S.Title>
            </div>
            <S.Form>
              {isSignUp && (
                <S.Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}

              <S.Input
                type="email"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button>{isSignUp ? "Зарегистрироваться" : "Войти"}</button>
              <S.TextGroep>
                {isSignUp && (
                  <div>
                    <S.ModalText>Уже есть аккаунт? Войдите здесь</S.ModalText>
                  </div>
                )}
                {!isSignUp && (
                  <div>
                    <S.ModalText>
                      Нужно зарегистрироваться? Регистрируйтесь здесь
                    </S.ModalText>
                  </div>
                )}
              </S.TextGroep>
            </S.Form>
          </S.ModalBlok>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}

export default AuthForm;
