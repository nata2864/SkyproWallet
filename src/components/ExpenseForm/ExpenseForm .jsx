import * as S from "./ExpenseForm .styled";
import { textErrors } from "../../const";
import { ModalBlok, Form } from "../AuthForm/AuthForm.styled";
import Categories from "../Categories/Categories";
import { useForm } from "../../hooks/useForm";
import { parse, format } from "date-fns";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

function ExpenseForm() {
  // Временно добавлено для проверки, что наименование формы меняется. Далее измения будут происходить после нажатия на кнопку "Редактировать" в таблице расхода
  const isExitExpenseForm = false;

  const { addNewExpense } = useContext(ExpenseContext);

  const handleCategoryChange = (category) => {
    handleChange({ target: { name: "category", value: category } });
  };

  const {
    formData,
    errors,
    focus,
    handleChange,
    handleFocus,
    handleBlur,
    validateForm,
    resetForm,
  } = useForm({
    initialValues: { name: "", date: "", amount: "", category: "" },

    validate: (values) => {
      const newErrors = {
        name: false,
        date: false,
        amount: false,
        category: false,
      };
      let isValid = true;
      const messages = [];

      const isNameEmpty = !values.name.trim();
      const isDateEmpty = !values.date.trim();
      const isAmountEmpty = !values.amount.trim();
      const isCategoryEmpty = !values.category.trim();

      const isNameTooShort = !isNameEmpty && values.name.length < 4;
      const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
      const isDateInvalid = !isDateEmpty && !dateRegex.test(values.date);
      const isAmountInvalid =
        !isAmountEmpty &&
        (isNaN(values.amount) || parseFloat(values.amount) <= 0);

      if (isNameEmpty || isDateEmpty || isAmountEmpty || isCategoryEmpty) {
        if (isNameEmpty) newErrors.name = true;
        if (isDateEmpty) newErrors.date = true;
        if (isAmountEmpty) newErrors.amount = true;
        if (isCategoryEmpty) newErrors.category = true;

        messages.push("Все поля должны быть заполнены");
        isValid = false;
      }

      if (isNameTooShort) {
        newErrors.name = true;
        messages.push("Наименование расхода должно быть не менее 4 символов");
        isValid = false;
      }

      if (isDateInvalid) {
        newErrors.date = true;
        messages.push("Дата должна быть в формате MM.ДД.ГГГГ");
        isValid = false;
      }

      if (isAmountInvalid) {
        newErrors.amount = true;
        messages.push("Введите корректную сумму больше 0");
        isValid = false;
      }

      return { isValid, newErrors, messages };
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formatDate = (inputDate) => {
      const parsed = parse(inputDate, "dd.MM.yyyy", new Date());
      return format(parsed, "M-d-yyyy");
    };

    const expense = {
      description: formData.name.trim(),
      sum: parseFloat(formData.amount),
      category: formData.category,
      date: formatDate(formData.date),
    };
    try {
      await addNewExpense({ expense });
      resetForm();
    } catch (err) {
      console.error(textErrors.addExpenseError, err.message);
    }
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
          <Categories
            selectedCategory={formData.category}
            onCategorySelect={handleCategoryChange}
          />
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
