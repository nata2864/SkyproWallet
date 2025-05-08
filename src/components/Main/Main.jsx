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
  SCategoryFiltration,
  SSorting,
  SSortingElement,
  SCategoryFiltrationElement,
  STableFiltersGroup,
  STableBodyWrapper,
  SCategoryLink,
} from "./Main.styled";
import { TableRow, TableFirstRow } from "../TableRows/TableRows";
import React, { useState } from "react";
const MiniCar = "/second-box/mini-car.svg";
const MiniFood = "/second-box/mini-food.svg";
const MiniGames = "/second-box/mini-games.svg";
const MiniHouse = "/second-box/mini-house.svg";
const MiniOther = "/second-box/mini-other.svg";
const MiniTeacher = "/second-box/mini-teacher.svg";

function Main() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState(false);
  const categories = [
    { name: "Еда", icon: MiniFood },
    { name: "Транспорт", icon: MiniCar },
    { name: "Жилье", icon: MiniHouse },
    { name: "Развлечение", icon: MiniGames },
    { name: "Образование", icon: MiniTeacher },
    { name: "Другое", icon: MiniOther },
  ];
  const sortings = [{ name: "Дате" }, { name: "Сумме" }];
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? false : category);
  };
  const handleSortingsSelect = (sorting) => {
    setSelectedSorting(sorting === selectedSorting ? false : sorting);
  };
  const data = [
    {
      id: 1,
      description: "Пятерочка",
      category: "Еда",
      date: "03.07.2024",
      amount: "3 500 ₽",
    },
    {
      id: 2,
      description: "Яндекс.Такси",
      category: "Транспорт",
      date: "02.07.2024",
      amount: "450 ₽",
    },
    {
      id: 3,
      description: "Аренда квартиры",
      category: "Жилье",
      date: "01.07.2024",
      amount: "25 000 ₽",
    },
    {
      id: 4,
      description: "Кинотеатр",
      category: "Развлечения",
      date: "30.06.2024",
      amount: "1 200 ₽",
    },
    {
      id: 5,
      description: "Онлайн-курсы",
      category: "Образование",
      date: "29.06.2024",
      amount: "5 000 ₽",
    },
    {
      id: 6,
      description: "Перевод другу",
      category: "Другое",
      date: "28.06.2024",
      amount: "2 000 ₽",
    },
    {
      id: 7,
      description: "Магнит",
      category: "Еда",
      date: "27.06.2024",
      amount: "2 800 ₽",
    },
    {
      id: 8,
      description: "Метро",
      category: "Транспорт",
      date: "26.06.2024",
      amount: "120 ₽",
    },
    {
      id: 9,
      description: "Коммунальные услуги",
      category: "Жилье",
      date: "25.06.2024",
      amount: "7 500 ₽",
    },
    {
      id: 10,
      description: "Концерт",
      category: "Развлечения",
      date: "24.06.2024",
      amount: "3 500 ₽",
    },
    {
      id: 11,
      description: "Учебники",
      category: "Образование",
      date: "23.06.2024",
      amount: "4 200 ₽",
    },
    {
      id: 12,
      description: "Подарок",
      category: "Другое",
      date: "22.06.2024",
      amount: "1 500 ₽",
    },
    {
      id: 13,
      description: "Перекресток",
      category: "Еда",
      date: "21.06.2024",
      amount: "4 300 ₽",
    },
    {
      id: 14,
      description: "Автобус",
      category: "Транспорт",
      date: "20.06.2024",
      amount: "60 ₽",
    },
    {
      id: 15,
      description: "Ремонт",
      category: "Жилье",
      date: "19.06.2024",
      amount: "15 000 ₽",
    },
    {
      id: 16,
      description: "Театр",
      category: "Развлечения",
      date: "18.06.2024",
      amount: "2 800 ₽",
    },
    {
      id: 17,
      description: "Яндекс.Практикум",
      category: "Образование",
      date: "17.06.2024",
      amount: "12 000 ₽",
    },
    {
      id: 18,
      description: "Благотворительность",
      category: "Другое",
      date: "16.06.2024",
      amount: "1 000 ₽",
    },
    {
      id: 19,
      description: "ВкусВилл",
      category: "Еда",
      date: "15.06.2024",
      amount: "3 700 ₽",
    },
    {
      id: 20,
      description: "Электричка",
      category: "Транспорт",
      date: "14.06.2024",
      amount: "350 ₽",
    },
    {
      id: 21,
      description: "Мебель",
      category: "Жилье",
      date: "13.06.2024",
      amount: "32 000 ₽",
    },
    {
      id: 22,
      description: "Квест-комната",
      category: "Развлечения",
      date: "12.06.2024",
      amount: "2 500 ₽",
    },
    {
      id: 23,
      description: "Репетитор",
      category: "Образование",
      date: "11.06.2024",
      amount: "3 000 ₽",
    },
    {
      id: 24,
      description: "Ремонт телефона",
      category: "Другое",
      date: "10.06.2024",
      amount: "5 500 ₽",
    },
    {
      id: 25,
      description: "Лента",
      category: "Еда",
      date: "09.06.2024",
      amount: "4 100 ₽",
    },
    {
      id: 26,
      description: "Такси в аэропорт",
      category: "Транспорт",
      date: "08.06.2024",
      amount: "1 200 ₽",
    },
    {
      id: 27,
      description: "Хозтовары",
      category: "Жилье",
      date: "07.06.2024",
      amount: "2 300 ₽",
    },
    {
      id: 28,
      description: "Боулинг",
      category: "Развлечения",
      date: "06.06.2024",
      amount: "1 800 ₽",
    },
    {
      id: 29,
      description: "Канцтовары",
      category: "Образование",
      date: "05.06.2024",
      amount: "900 ₽",
    },
    {
      id: 30,
      description: "Фотоуслуги",
      category: "Другое",
      date: "04.06.2024",
      amount: "4 000 ₽",
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
                <STableFiltersGroup>
                  Фильтровать по категории
                  <SCategoryLink href="#">
                    {selectedCategory ? selectedCategory.toLowerCase() : "еда"}
                  </SCategoryLink>
                  <svg
                    onClick={() => setIsOpenCategory(!isOpenCategory)}
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
                  {isOpenCategory && (
                    <SCategoryFiltration>
                      {categories.map((category) => (
                        <SCategoryFiltrationElement
                          key={category.name}
                          onClick={() => handleCategorySelect(category.name)}
                          $isSelected={selectedCategory === category.name}
                        >
                          <img src={category.icon} alt="logo" />
                          {category.name}
                        </SCategoryFiltrationElement>
                      ))}
                    </SCategoryFiltration>
                  )}
                </STableFiltersGroup>
                <STableFiltersGroup>
                  Сортировать по
                  <SSortLink href="#">
                    {selectedSorting ? selectedSorting.toLowerCase() : "дате"}
                  </SSortLink>
                  <svg
                    onClick={() => setIsOpenSorting(!isOpenSorting)}
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
                  {isOpenSorting && (
                    <SSorting>
                      {sortings.map((sorting) => (
                        <SSortingElement
                          key={sorting.name}
                          onClick={() => handleSortingsSelect(sorting.name)}
                          $isSelected={selectedSorting === sorting.name}
                        >
                          {sorting.name}
                        </SSortingElement>
                      ))}
                    </SSorting>
                  )}
                </STableFiltersGroup>
              </STableFilters>
            </STableHeader>
            <SExpenseTable>
              <TableFirstRow />
              <STableBodyWrapper>
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
              </STableBodyWrapper>
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
