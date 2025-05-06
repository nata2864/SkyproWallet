// import { textErrors } from "../const";
import { toast } from "react-toastify";

export const validateAuthForm = (values, isSignUp) => {
  const newErrors = { name: false, login: false, password: false };
  let isValid = true;
  const messages = [];

  const isNameInvalid = isSignUp && !values.name.trim();
  const isLoginInvalid = !values.login.trim();
  const isPasswordInvalid = !values.password.trim();

  const isEmailInvalid =
    !isLoginInvalid && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.login);
  const isPasswordTooShort =
    !isPasswordInvalid && values.password.length < 4;

  if (isNameInvalid || isLoginInvalid || isPasswordInvalid) {
    if (isNameInvalid) newErrors.name = true;
    if (isLoginInvalid) newErrors.login = true;
    if (isPasswordInvalid) newErrors.password = true;

    messages.push("Все поля должны быть заполнены");
    isValid = false;
  }

  if (isEmailInvalid) {
    newErrors.login = true;
    messages.push("Введите корректный email");
    isValid = false;
  }

  if (isPasswordTooShort) {
    newErrors.password = true;
    messages.push("Пароль должен быть не менее 4 символов");
    isValid = false;
  }

  messages.forEach((msg) => toast.error(msg));

  return { isValid, newErrors, messages };
};
