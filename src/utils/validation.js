// Функция проверки заполнения полей и выводит ошибки

export const validateField = (name, value, rules) => {
  const fieldRules = rules[name] || [];

  for (let { rule, message } of fieldRules) {
    if (rule === 'required' && !value.trim()) {
      return message;
    }

    if (rule === 'email' && !value.includes('@')) {
      return message;
    }

    if (rule === 'username' && value.length < 3) {
      return message;
    }

    if (rule === 'login' && value.length < 5) {
      return message;
    }

    if (rule === 'date') {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        return message;
      }
    }

    if (rule === 'amount') {
      const num = parseFloat(value);
      if (isNaN(num) || num <= 0) {
        return message;
      }
    }
  }

  return null; 
};
