import * as S from "./AuthForm.styled";
import { signIn, signUp } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { validateLoginErrors } from "../../Validators/authValidator";
import { useViewport } from "../../hooks/useViewport";

function AuthForm({ isSignUp }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  const isMobile = useViewport(451);

  const initialValues = isSignUp
    ? { name: "", login: "", password: "" }
    : { login: "", password: "" };

  const {
    formData,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleFocus,
    validateForm,
  } = useForm({
    initialValues,
    validate: (values) => {
      const emptyFieldsErrors = {};
      let hasEmpty = false;
      Object.keys(values).forEach((key) => {
        if (!values[key].trim()) {
          emptyFieldsErrors[key] = "Это поле не может быть пустым";
          hasEmpty = true;
        }
      });
      
      if (hasEmpty) {
        if (!isMobile) toast.error("Все поля должны быть заполнены");
        return { isValid: false, errors: emptyFieldsErrors };
      }

      const { isValid, errors: fieldErrors } = validateLoginErrors(values);

      if (!isValid && !isMobile) {
        Object.values(fieldErrors).forEach(msg => {
            if(msg) toast.error(msg);
        });
      }

      return { isValid, errors: fieldErrors };
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        if (isSignUp) navigate(RoutesApp.SIGN_IN);
        else {
          updateUserInfo(data);
          navigate(RoutesApp.MAIN);
        }
      }
    } catch (err) {
      toast.error(err.message || "Что-то пошло не так");
    }
  };
  
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <div>
              <S.Title>{isSignUp ? "Регистрация" : "Вход"}</S.Title>
            </div>
            <S.Form onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <S.InputAuthForm
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                    placeholder="Имя"
                    $error={isMobile && !!errors.name}
                    $success={isMobile && dirty.name && !errors.name}
                  />
                  {isMobile && errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
                </>
              )}

              <S.InputAuthForm
                name="login"
                value={formData.login}
                onChange={handleChange}
                onFocus={() => handleFocus("login")}
                onBlur={() => handleBlur("login")}
                placeholder="Эл. почта"
                $error={isMobile && !!errors.login}
                $success={isMobile && dirty.login && !errors.login}
              />
              {isMobile && errors.login && <S.ErrorMessage>{errors.login}</S.ErrorMessage>}

              <S.InputAuthForm
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                placeholder="Пароль"
                $error={isMobile && !!errors.password}
                $success={isMobile && dirty.password && !errors.password}
              />
              {isMobile && errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}

              <S.AuthButton type="submit">
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.AuthButton>

              <S.TextGroep>
                {isSignUp ? (
                  <>
                    <S.ModalText>Уже есть аккаунт?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_IN}>Войдите здесь</S.ModalLink>
                  </>
                ) : (
                  <>
                    <S.ModalText>Нужно зарегистрироваться?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_UP}>Регистрируйтесь здесь</S.ModalLink>
                  </>
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