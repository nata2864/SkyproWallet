import {
  SMain,
  SMainHeader,
  STableHeader,
  STableSection,
  SSectionTitle,
  STableFilters,
  SSortLink,
  SExpenseTable,
  SFormAside,
  SExpenseForm,
  SInput,
  SCategoryTags,
  STag,
  SSubmitBtn,
  STables,
} from "./Main.styled";
const MiniBucket = "/first-box/mini-bucket.svg";
const MiniPen = "/first-box/mini-pen.svg";
const MiniCar = "/second-box/mini-car.svg";
const MiniFood = "/second-box/mini-food.svg";
const MiniGames = "/second-box/mini-games.svg";
const MiniHouse = "/second-box/mini-house.svg";
const MiniOther = "/second-box/mini-other.svg";
const MiniTeacher = "/second-box/mini-teacher.svg";

const TableHeader = () => (
  <thead>
    <tr>
      <th>Описание</th>
      <th>Категория</th>
      <th>Дата</th>
      <th>Сумма</th>
      <th>Действия</th>
    </tr>
  </thead>
);

const TableRow = ({
  description,
  category,
  date,
  amount,
  onEdit,
  onDelete,
}) => (
  <tr>
    <td>{description}</td>
    <td>{category}</td>
    <td>{date}</td>
    <td>{amount}</td>
    <td>
      <button onClick={onDelete}>
        <img src={MiniBucket} alt="Удалить" />
      </button>
      <button onClick={onEdit}>
        <img src={MiniPen} alt="Редактировать" />
      </button>
    </td>
  </tr>
);

function Main() {
  const data = [
    {
      id: 1,
      description: "Пятерочка",
      category: "Еда",
      date: "03.07.2024",
      amount: "3 500 ₽",
    },
  ];

  const handleEdit = (id) => {
    console.log("Редактировать запись с id:", id);
  };

  const handleDelete = (id) => {
    console.log("Удалить запись с id:", id);
  };
  // На стадии примера - потом необходимо доработать обработчики с API

  return (
    <>
      <SMain>
        <SMainHeader>Мои расходы</SMainHeader>
        <STables>
          <STableSection>
            <STableHeader>
              <SSectionTitle>Таблица расходов</SSectionTitle>
              <STableFilters>
                <div>Фильтровать по категории</div>
                <div>
                  Сортировать по <SSortLink href="#">дате</SSortLink>
                </div>
              </STableFilters>
            </STableHeader>
            <SExpenseTable>
              <TableHeader />
              <tbody>
                {data.map((expense) => (
                  <TableRow
                    key={expense.id}
                    description={expense.description}
                    category={expense.category}
                    date={expense.date}
                    amount={expense.amount}
                    onEdit={() => handleEdit(expense.id)}
                    onDelete={() => handleDelete(expense.id)}
                  />
                ))}
              </tbody>
            </SExpenseTable>
          </STableSection>
          <SFormAside>
            <SSectionTitle>Новый расход</SSectionTitle>
            <SExpenseForm>
              <div>
                <label>Описание</label>
                <SInput type="text" placeholder="Введите описание" />
              </div>
              <div>
                <label>Категория</label>
                <SCategoryTags>
                  <STag>
                    <img src={MiniFood} alt="logo" /> Еда
                  </STag>
                  <STag>
                    <img src={MiniCar} alt="logo" /> Транспорт
                  </STag>
                  <STag>
                    <img src={MiniHouse} alt="logo" /> Жилье
                  </STag>
                  <STag>
                    <img src={MiniGames} alt="logo" /> Развлечения
                  </STag>
                  <STag>
                    <img src={MiniTeacher} alt="logo" /> Образование
                  </STag>
                  <STag>
                    <img src={MiniOther} alt="logo" /> Другое
                  </STag>
                </SCategoryTags>
              </div>
              <div>
                <label>Дата</label>
                <SInput type="date" />
              </div>
              <div>
                <label>Сумма</label>
                <SInput type="number" placeholder="Введите сумму" />
              </div>
              <SSubmitBtn type="submit">Добавить новый расход</SSubmitBtn>
            </SExpenseForm>
          </SFormAside>
        </STables>
      </SMain>
    </>
  );
}

export default Main;
