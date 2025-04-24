import * as S from "./AithForm.styled";
import { signIn,signUp } from "../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate
 } from "react-router-dom";
 import { RoutesApp } from "../../const";

function AuthForm({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  }); 

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

   // функция валидации
   const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
       newErrors.name = true;
       toast.error("Заполните все поля");
       isValid = false;
    }

    if (!formData.login.trim()) {
       newErrors.login = true;
       toast.error("Заполните все поля");
       isValid = false;
    }

    if (!formData.password.trim()) {
       newErrors.password = true;
       toast.error("Заполните все поля");
       isValid = false;
    }

    setErrors(newErrors);
    return isValid;
 };

 // функция, которая отслеживает в полях изменения 
   // и меняет состояние компонента
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
       ...formData,
       [name]: value,
    });
    setErrors({ ...errors, [name]: false });
  
 };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
  
       return;
    }
 try { 
   
    const data = !isSignUp
       ? await signIn({ login: formData.login, password: formData.password })
       : await signUp(formData);

    if (data) {
      if (isSignUp) {
        navigate(RoutesApp.SIGN_IN); // <-- перейти на вход после регистрации
      } else {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(RoutesApp.MAIN); // <-- войти, если не регистрация
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
                <S.Input
                  type="text"
                  name="first-name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                />
              )}

              <S.Input
                type="email"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
              />
              <button type="submit">{isSignUp ? "Зарегистрироваться" : "Войти"}</button>
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
