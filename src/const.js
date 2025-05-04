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

export const categorieName = [
  { id: 1, name: "Еда", srcIcon: "/second-box/mini-food.svg" },
  { id: 2, name: "Транспорт", srcIcon: "/second-box/mini-car.svg" },
  { id: 3, name: "Жилье", srcIcon: "/second-box/mini-house.svg" },
  { id: 4, name: "Развлечения", srcIcon: "/second-box/mini-games.svg" },
  { id: 5, name: "Образование", srcIcon: "/second-box/mini-teacher.svg" },
  { id: 6, name: "Другое", srcIcon: "/second-box/mini-other.svg" },
];
