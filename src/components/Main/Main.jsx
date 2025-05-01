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

import { TableRow, TableFirstRow } from "../TableRows/TableRows";

const MiniCar = "/second-box/mini-car.svg";
const MiniFood = "/second-box/mini-food.svg";
const MiniGames = "/second-box/mini-games.svg";
const MiniHouse = "/second-box/mini-house.svg";
const MiniOther = "/second-box/mini-other.svg";
const MiniTeacher = "/second-box/mini-teacher.svg";

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
                <div>
                  Фильтровать по категории
                  <svg
                    width="6.062134"
                    height="5.250000"
                    viewBox="0 0 6.06213 5.25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Polygon-3" // Идентификаторы лучше писать без пробелов (можно использовать дефис)
                      d="M3.03 5.25L6.06 0L0 0L3.03 5.25Z"
                      fill="#000000"
                      fillOpacity="1.0" // camelCase вместо fill-opacity
                      fillRule="evenodd" // camelCase вместо fill-rule
                    />
                  </svg>
                </div>
                <div>
                  Сортировать по
                  <SSortLink href="#">дате</SSortLink>
                  <svg
                    width="6.062134"
                    height="5.250000"
                    viewBox="0 0 6.06213 5.25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Polygon-3" // Идентификаторы лучше писать без пробелов (можно использовать дефис)
                      d="M3.03 5.25L6.06 0L0 0L3.03 5.25Z"
                      fill="#000000"
                      fillOpacity="1.0" // camelCase вместо fill-opacity
                      fillRule="evenodd" // camelCase вместо fill-rule
                    />
                  </svg>
                </div>
              </STableFilters>
            </STableHeader>
            <SExpenseTable>
              <TableFirstRow />
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
                <SInput type="date" placeholder="Введите дату" />
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
