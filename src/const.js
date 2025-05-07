export const textSizes = {
  small: {
    fontSize: "12px",
    fontWeight: "400",
  },
  smallHeader: {
    fontSize: "14px",
    fontWeight: "400",
  },
  medium: {
    fontSize: "16px",
    fontWeight: "600",
  },
  largeH2: {
    fontSize: "24px",
    fontWeight: "700",
  },

  largeH1: {
    fontSize: "32px",
    fontWeight: "700",
  },
};

// Апи для регистрации и авторизации пользователя
export const API_URL = "https://wedev-api.sky.pro/api/user";

// Eindpoints для адресной строки
export const RoutesApp = {
  MAIN: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NOT_FOUND: "/*",
  LOGIN: "/login",
  ANALYSIS: "/analysis",
};

//Обьект ошибок
export const textErrors = {
  signInAndSignUpError:
    "Упс! Введенные вами данные не корректны. Введите данные корректно и повторите попытку.",

  addExpenseError: "Ошибка добавления расхода",
  updateExpenseError: "Ошибка редактирования расхода",
  deleteExpenseError: "Ошибка удаления расхода",
  getExpenseError: "Ошибка при загрузке расходов",
  addExpense: "Ошибка при обновлении расходов",
};

export const inputColors = {
  static: {
    background: "transparent",
    border: "#999999",
  },
  active: {
    background: " #DBFFE9",
    border: "#1FA46C",
  },
  error: {
    background: " #FFEBEB",
    border: "#F25050",
  },
};

export const buttonStyles = {
  active: {
    color: "#1fa46c",
  },
  error: {
    color: "#999999",
  },
  mobile: {
    with: "343px",
  },
  desktop: {
    with: "100%",
  },
};

// Массив обьектов для категорий расходов
export const categorieName = [
  { id: 1, name: "Еда",value: "food", srcIcon: {
    default: "../src/assets/food/default.svg",
    active: "../src/assets/food/active.svg"
  }},
  { id: 2, name: "Транспорт",value: "transport", srcIcon: {
    default: "../src/assets/transport/default.svg",
    active: "../src/assets/food/active.svg"
  } },
  { id: 3, name: "Жилье",value: "housing", srcIcon: {
    default: "../src/assets/housing/default.svg",
    active: "../src/assets/food/active.svg"
  } },
  { id: 4, name: "Развлечения",value: "joy",  srcIcon: {
    default: "../src/assets/joy/default.svg",
    active: "../src/assets/food/active.svg"
  } },
  { id: 5, name: "Образование",value: "education", srcIcon: "/second-box/mini-teacher.svg" },
  { id: 6, name: "Другое",value: "others",  srcIcon: "/second-box/mini-other.svg" },
];




// Массив обьектов ошибок при отправки на сервер данных с формы
export const validationSchema = {
  email: [
    { rule: 'required', message: 'Поле обязательно' },
    { rule: 'email', message: 'Некорректный email' },
  ],
  username: [
    { rule: 'required', message: 'Поле обязательно' },
    { rule: 'username', message: 'Имя слишком короткое' },
  ],
  login: [
    { rule: 'required', message: 'Поле обязательно' },
    { rule: 'login', message: 'Пароль должен содержать не менее 5 знаков' },
  ],
  date: [
    { rule: 'required', message: 'Поле обязательно' },
    { rule: 'date', message: 'Некорректная дата' },
  ],
  amount: [
    { rule: 'required', message: 'Поле обязательно' },
    { rule: 'amount', message: 'Сумма должна быть положительным числом' },
  ],
};

