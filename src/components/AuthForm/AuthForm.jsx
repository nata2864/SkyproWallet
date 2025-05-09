import * as S from "./AuthForm.styled";
import { signIn, signUp } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

function AuthForm({ isSignUp }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);

  const {
    formData,
    focus,
    errors,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
  } = useForm({
    initialValues: {
      name: "",
      login: "",
      password: "",
    },
    validate: (values) => {
      const newErrors = { name: false, login: false, password: false };
      const messages = [];
      let isValid = true;

      // Валидация name
      if (isSignUp && !values.name.trim()) {
        newErrors.name = true;
        messages.push("Поле 'Имя' обязательно.");
        isValid = false;
      }

      // Валидация login (email)
      if (!values.login.trim()) {
        newErrors.login = true;
        messages.push("Поле 'Email' обязательно.");
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.login)) {
        newErrors.login = true;
        messages.push("Введите корректный email.");
        isValid = false;
      }

      // Валидация password
      if (!values.password.trim()) {
        newErrors.password = true;
        messages.push("Поле 'Пароль' обязательно.");
        isValid = false;
      } else if (values.password.length < 4) {
        newErrors.password = true;
        messages.push("Пароль должен быть не менее 4 символов.");
        isValid = false;
      }

      return { isValid, newErrors, messages };
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Выполняем валидацию
    const isValid = validateForm();

    if (!isValid) return;

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        if (isSignUp) {
          navigate(RoutesApp.SIGN_IN);
        } else {
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
                <S.InputAuthForm
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  $isFocused={focus.name}
                  $error={errors.name}
                />
              )}

              <S.InputAuthForm
                type="email"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Эл. почта"
                onFocus={() => handleFocus("login")}
                onBlur={() => handleBlur("login")}
                $isFocused={focus.login}
                $error={errors.login}
              />
              <S.InputAuthForm
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                $isFocused={focus.password}
                $error={errors.password}
              />
              <S.AuthButton
                type="submit"
                // Блокировка кнопки, если есть хоть одна ошибка
                disabled={Object.values(errors).some((err) => err)}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.AuthButton>
              <S.TextGroep>
                {isSignUp && (
                  <>
                    <S.ModalText>Уже есть аккаунт?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_IN}>
                      Войдите здесь
                    </S.ModalLink>
                  </>
                )}
                {!isSignUp && (
                  <>
                    <S.ModalText>Нужно зарегистрироваться?</S.ModalText>
                    <S.ModalLink to={RoutesApp.SIGN_UP}>
                      Регистрируйтесь здесь
                    </S.ModalLink>
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
