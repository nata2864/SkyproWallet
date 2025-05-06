import { toast } from "react-toastify";

export const validateExpenseForm = (values) => {
  const newErrors = { name: false, date: false, amount: false };
  let isValid = true;
  const messages = [];

  const isNameEmpty = !values.name.trim();
  const isDateEmpty = !values.date.trim();
  const isAmountEmpty = !values.amount.trim();
  const isNameTooShort = !isNameEmpty && values.name.length < 3;
  const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  const isDateInvalid = !isDateEmpty && !dateRegex.test(values.date);
  const isAmountInvalid =
    !isAmountEmpty && (isNaN(values.amount) || parseFloat(values.amount) <= 0);

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

  messages.forEach((msg) => toast.error(msg));

  return { isValid, newErrors, messages };
};
