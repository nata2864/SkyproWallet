import { useState, useCallback } from "react";
import { validateField } from "../utils/validation";
import { validationSchema } from "../const";
import { toast } from "react-toastify";

export const useInputValidation = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);

 // Обработка изменения значения в полях формы
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Проверяем поле на ошибку
    const error = validateField(name, value, validationSchema);

    setValues((prev) => ({ ...prev, [name]: value }));
    setInputErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // Валидация всей формы
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Проверяем каждое поле на наличие ошибок
    for (let name in values) {
      const error = validateField(name, values[name], validationSchema);
      if (error) {
        isValid = false;
        newErrors[name] = error;
      }
    }

    setInputErrors(newErrors);

    // Показ ошибок в toast и блокировка кнопки
    if (!isValid) {
      // Показываем ошибки для каждого поля
      Object.values(newErrors).forEach((errorMessage) => {
        toast.error(errorMessage, {
          autoClose: 2000,
        });
      });
      setButtonDisabled(true); 
    } else {
      setButtonDisabled(false); 
    }

    return isValid;
  };

  return {
    values,
    inputErrors,
    handleChange,
    validateForm,
    buttonDisabled,
  };
};
