import * as S from "./ExpenseForm .styled";

// import { useState } from "react";
// import { toast } from "react-toastify";
import { ModalBlok, Form } from "../AuthForm/AuthForm.styled";
import Categories from "../Categories/Categories";
import { useForm } from "../../hooks/useForm";

function ExpenseForm() {
  // Временно добавлено для проверки, что наименование формы меняется. Далее измения будут происходить после нажатия на кнопку "Редактировать" в таблице расхода
  const isExitExpenseForm = false;

  const {
  formData,
  errors,
  focus,
  handleChange,
  handleFocus,
  handleBlur,
  validateForm,
} = useForm({
  initialValues: { name: "", date: "", amount: "" },


  validate: (values) => {
    const newErrors = { name: false, date: false, amount: false };
    let isValid = true;
  
    const isNameEmpty = !values.name.trim();
    const isDateEmpty = !values.date.trim();
    const isAmountEmpty = !values.amount.trim();
  
    const isNameTooShort = !isNameEmpty && values.name.length < 3;
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const isDateInvalid = !isDateEmpty && !dateRegex.test(values.date);
    const isAmountInvalid =
      !isAmountEmpty && (isNaN(values.amount) || parseFloat(values.amount) <= 0);
  
    const messages = [];
  
    if (isNameEmpty || isDateEmpty || isAmountEmpty) {
      if (isNameEmpty) newErrors.name = true;
      if (isDateEmpty) newErrors.date = true;
      if (isAmountEmpty) newErrors.amount = true;
  
      messages.push("Все поля должны быть заполнены");
      isValid = false;
    }
  
    if (isNameTooShort) {
      newErrors.name = true;
      messages.push("Наименование расхода должно быть не менее 3 символов");
      isValid = false;
    }
  
    if (isDateInvalid) {
      newErrors.date = true;
      messages.push("Дата должна быть в формате ДД.ММ.ГГГГ");
      isValid = false;
    }
  
    if (isAmountInvalid) {
      newErrors.amount = true;
      messages.push("Введите корректную сумму больше 0");
      isValid = false;
    }
  
    return { isValid, newErrors, messages };
  }
  
});

  // const [formData, setFormData] = useState({
  //   name: "",
  //   date: "",
  //   amount: "",
  // });

  // // состояние ошибок
  // const [errors, setErrors] = useState({
  //   name: false,
  //   date: false,
  //   amount: false,
  // });

  // const [focus, setFocus] = useState({
  //   name: false,
  //   date: false,
  //   amount: false,
  // });

  // const handleFocus = (field) => {
  //   setFocus((prev) => ({ ...prev, [field]: true }));
  // };

  // const handleBlur = (field) => {
  //   setFocus((prev) => ({ ...prev, [field]: false }));
  //   validateForm();
  // };

  // // функция валидации
  // const validateForm = () => {
  //   const newErrors = { name: "", date: "", amount: "" };
  //   let isValid = true;

  //   const isNameEmpty = !formData.name.trim();
  //   const isDateEmpty = !formData.date.trim();
  //   const isAmountEmpty = !formData.amount.trim();
  //   const isNameTooShort = !isNameEmpty && formData.name.length < 3;
  //   const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  //   const isDateInvalid = !isDateEmpty && !dateRegex.test(formData.date);
  //   const isAmountInvalid =
  //     !isAmountEmpty &&
  //     (isNaN(formData.amount) || parseFloat(formData.amount) <= 0);

  //   if (isNameEmpty || isDateEmpty || isAmountEmpty) {
  //     if (isNameEmpty) newErrors.name = true;
  //     if (isDateEmpty) newErrors.date = true;
  //     if (isAmountEmpty) newErrors.amount = true;

  //     isValid = false;

  //     toast.error("Все поля должны быть заполнены");
  //   }

  //   if (isNameTooShort) {
  //     newErrors.password = true;
  //     toast.error("Наименование расхода должно быть не менее 3 символов");
  //     isValid = false;
  //   }

  //   if (isDateInvalid) {
  //     newErrors.date = true;
  //     toast.error("Дата должна быть в формате ДД.ММ.ГГГГ");
  //     isValid = false;
  //   }

  //   if (isAmountInvalid) {
  //     newErrors.amount = true;
  //     toast.error("Введите корректную сумму больше 0");
  //     isValid = false;
  //   }

  //   setErrors(newErrors);

  //   return isValid;
  // };

  // // функция, которая отслеживает в полях изменения
  // // и меняет состояние компонента
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  //   setErrors({ ...errors, [name]: false });
  // };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    console.log("Valid");
  };

  return (
    <ModalBlok>
      <S.TitleForm>
        {isExitExpenseForm ? "Редактирование" : "Новый расход"}
      </S.TitleForm>
      <Form onSubmit={handleSubmit}>
        <S.InputTitle>Описание</S.InputTitle>
        <S.InputExpenseForm
          name="name"
          placeholder="Введите описание"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          $isFocused={focus.name}
          $error={errors.name}
        />

        <S.InputTitle>Категория</S.InputTitle>
        <S.CategoryTags>
          <Categories />
        </S.CategoryTags>

        <S.InputTitle>Дата</S.InputTitle>
        <S.InputExpenseForm
          name="date"
          placeholder="Введите дату "
          value={formData.date}
          onChange={handleChange}
          onFocus={() => handleFocus("date")}
          onBlur={() => handleBlur("date")}
        $isFocused={focus.date}
          $error={errors.date}
        />

        <S.InputTitle>Сумма</S.InputTitle>
        <S.InputExpenseForm
          name="amount"
          placeholder="Введите сумму"
          value={formData.amount}
          onChange={handleChange}
          onFocus={() => handleFocus("amount")}
          onBlur={() => handleBlur("amount")}
          $isFocused={focus.amount}
          $error={errors.amount}
        />

        <S.ExpenseButton
          type="submit"
          disabled={Object.values(errors).some((err) => err)}
        >
          Добавить новый расход
        </S.ExpenseButton>
      </Form>
    </ModalBlok>
  );
}

export default ExpenseForm;
