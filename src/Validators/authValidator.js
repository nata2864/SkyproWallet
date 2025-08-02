export const validateLoginErrors = (values) => {
  const errors = {};
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(values.login)) {
    errors.login = "Введите корректный email";
    isValid = false;
  }

  if (values.password.length < 4) {
    errors.password = "Пароль должен быть не менее 4 символов";
    isValid = false;
  }
  
  if (values.name !== undefined && values.name.length < 2) {
    errors.name = "Имя должно содержать не менее 2 символов";
    isValid = false;
  }

  return { isValid, errors };
};