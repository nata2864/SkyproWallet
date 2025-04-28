
import * as S from "./AithForm.styled";
import { signIn,signUp } from "../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate
 } from "react-router-dom";
 import { RoutesApp } from "../../const";
 import { AuthContext
  } from "../../context/AuthContext";
  import { useContext } from "react";

function AuthForm({ isSignUp}) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);

 
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



  const [focus, setFocus] = useState({
    name: false,
    login: false,
    password: false,
  });

  const handleFocus = (field) => {
    setFocus((prev) => ({ ...prev, [field]: true }));
  };
  
  const handleBlur = (field) => {
    setFocus((prev) => ({ ...prev, [field]: false }));
  };
  


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
                  isFocused={focus.name}
                  hasError={errors.name}
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
                isFocused={focus.login}
                hasError={errors.login}
              />
              <S.InputAuthForm
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                onFocus={() => handleFocus("password")}
    onBlur={() => handleBlur("password")}
                isFocused={focus.password}
                hasError={errors.password}
              />
              <S.Button type="submit">{isSignUp ? "Зарегистрироваться" : "Войти"}</S.Button>
              <S.TextGroep>
                {isSignUp && (
                 <>
                 <S.ModalText>Уже есть аккаунт?</S.ModalText>
                 <S.ModalLink to={RoutesApp.SIGN_IN}>Войдите здесь</S.ModalLink>
               </>
                )}
                {!isSignUp && (
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