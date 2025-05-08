export const textSizes = {
    small: {
        fontSize: '12px',
        fontWeight: '400',
    },
    smallHeader: {
        fontSize: '14px',
        fontWeight: '400',
    },
    medium: {
        fontSize: '16px',
        fontWeight: '600',
    },
    largeH2: {
        fontSize: '24px',
        fontWeight: '700',
    },

    largeH1: {
        fontSize: '32px',
        fontWeight: '700',
    },
}

// Апи для регистрации и авторизации пользователя
export const API_URL = 'https://wedev-api.sky.pro/api/user'

// API для запроса и публикации транзакций
export const API_URL_DATA = 'https://wedev-api.sky.pro/api/transactions'

// Eindpoints для адресной строки
export const RoutesApp = {
    MAIN: '/',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    NOT_FOUND: '/*',
    LOGIN: '/login',
    ANALYSIS: '/analysis',
    PERIOD: '/period'
}

//Обьект ошибок
export const textErrors = {
    signInAndSignUpError:
        'Упс! Введенные вами данные не корректны. Введите данные корректно и повторите попытку.',

    addExpenseError: 'Ошибка добавления расхода',
    updateExpenseError: 'Ошибка редактирования расхода',
    deleteExpenseError: 'Ошибка удаления расхода',
    getExpenseError: 'Ошибка при загрузке расходов',
    addExpense: 'Ошибка при обновлении расходов',
}

export const inputColors = {
    static: {
        background: 'transparent',
        border: '#999999',
    },
    active: {
        background: ' #DBFFE9',
        border: '#1FA46C',
    },
    error: {
        background: ' #FFEBEB',
        border: '#F25050',
    },
}

export const buttonStyles = {
    active: {
        color: '#1fa46c',
    },
    error: {
        color: '#999999',
    },
    mobile: {
        with: '343px',
    },
    desktop: {
        with: '100%',
    },
}

// Категории:  food, transport, housing, joy, education, others
// joy: Развлечения
// housing: Жилье
// food: Еда
// education: Образование
// others: Другое
export const exspenses = [
    {
        _id: '67e52163be69db1bb99a1b71',
        userId: '6421860c32e0301869fb3301',
        description: 'Билеты в кино',
        category: 'joy',
        date: '2025-06-02T00:00:00.000Z',
        sum: 600,
    },
    {
        _id: '67e522dbbe69db1bb99a1b72',
        userId: '6421860c32e0301869fb3301',
        description: 'Моющие средства, стиральный порошок',
        category: 'housing',
        date: '2025-06-02T00:00:00.000Z',
        sum: 1000,
    },
    {
        _id: '67e52357be69db1bb99a1b74',
        userId: '6421860c32e0301869fb3301',
        description: 'Покупка продуктов на неделю',
        category: 'food',
        date: '2025-12-13T00:00:00.000Z',
        sum: 3500,
    },
    {
        _id: '67e52409be69db1bb99a1b75',
        userId: '6421860c32e0301869fb3301',
        description: 'Поездка на автобусе, метро',
        category: 'transport',
        date: '2025-04-02T00:00:00.000Z',
        sum: 222,
    },
    {
        _id: '67e5240bbe69db1bb99a1b76',
        userId: '6421860c32e0301869fb3301',
        description: 'Оплата онлайн уроков английского на месяц',
        category: 'education',
        date: '2025-04-02T00:00:00.000Z',
        sum: 10211,
    },
    {
        _id: '67e5240dbe69db1bb99a1b77',
        userId: '6421860c32e0301869fb3301',
        description: 'Игрушка собаке',
        category: 'others',
        date: '2025-04-02T00:00:00.000Z',
        sum: 12121,
    },
    {
        _id: '67e52414be69db1bb99a1b78',
        userId: '6421860c32e0301869fb3301',
        description: 'Насадка на пылесос',
        category: 'housing',
        date: '2025-05-02T00:00:00.000Z',
        sum: 1200,
    },
    {
        _id: '67e52418be69db1bb99a1b79',
        userId: '6421860c32e0301869fb3301',
        description: 'Салфетки для монитора',
        category: 'others',
        date: '2025-05-02T00:00:00.000Z',
        sum: 212,
    },
    {
        _id: '67e5241abe69db1bb99a1b7a',
        userId: '6421860c32e0301869fb3301',
        description: 'приложение онлайн переводчик',
        category: 'education',
        date: '2025-05-02T00:00:00.000Z',
        sum: 2123,
    },
]
