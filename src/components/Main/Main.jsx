import React, { useState, useEffect } from "react";
import { fetchExpenses } from "../../services/api";
import {
  SMain,
  SMainHeader,
  STableHeader,
  STableSection,
  SSectionTitle,
  STableFilters,
  SSortLink,
  SExpenseTable,
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
import { categoryTranslations } from "../../const";
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
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const expenses = await fetchExpenses({ token });
        setData(expenses);
        setFilteredData(expenses);
      } catch (error) {
        console.error("Ошибка при загрузке расходов:", error.message);
      }
    };

    fetchData();
  }, []);
  const categories = [
    { name: "Еда", icon: MiniFood },
    { name: "Транспорт", icon: MiniCar },
    { name: "Жилье", icon: MiniHouse },
    { name: "Развлечение", icon: MiniGames },
    { name: "Образование", icon: MiniTeacher },
    { name: "Другое", icon: MiniOther },
  ];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const sortings = [{ name: "Дате" }, { name: "Сумме" }];
  const handleCategorySelect = (category) => {
    const newCategory = category === selectedCategory ? false : category;
    setSelectedCategory(newCategory);
    if (!newCategory) {
      setFilteredData(data);
    } else {
      const categoryKey = Object.keys(categoryTranslations).find(
        (key) => categoryTranslations[key] === category
      );

      setFilteredData(
        data.filter((expense) => expense.category === categoryKey)
      );
    }
  };
  const handleSortingsSelect = (sorting) => {
    const newSorting = sorting === selectedSorting ? false : sorting;
    setSelectedSorting(newSorting);
    if (!newSorting) {
      setFilteredData(data);
    } else {
      setFilteredData((prevData) => {
        const sorted = [...prevData];
        if (sorting === "Дате") {
          sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sorting === "Сумме") {
          sorted.sort((a, b) => b.sum - a.sum);
        }
        return sorted;
      });
    }
  };

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
                <STableFiltersGroup
                  onClick={() => {
                    setIsOpenCategory(!isOpenCategory);
                    if (isOpenSorting) {
                      setIsOpenSorting(false);
                    }
                  }}
                >
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
                          onClick={() => {
                            handleCategorySelect(category.name);
                            setIsOpenCategory(false);
                          }}
                          $isSelected={selectedCategory === category.name}
                        >
                          <img src={category.icon} alt="logo" />
                          {category.name}
                        </SCategoryFiltrationElement>
                      ))}
                    </SCategoryFiltration>
                  )}
                </STableFiltersGroup>
                <STableFiltersGroup
                  onClick={() => {
                    setIsOpenSorting(!isOpenSorting);
                    if (isOpenCategory) {
                      setIsOpenCategory(false);
                    }
                  }}
                >
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
                          onClick={() => {
                            handleSortingsSelect(sorting.name);
                            setIsOpenSorting(false);
                          }}
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
                {filteredData.map((expense) => (
                  <TableRow
                    key={expense._id}
                    description={expense.description}
                    category={
                      categoryTranslations[expense.category] || expense.category
                    }
                    date={formatDate(expense.date)}
                    amount={`${expense.sum.toLocaleString("ru-RU")} ₽`}
                    onEdit={() => handleEdit(expense._id)}
                    onDelete={() => handleDelete(expense._id)}
                  />
                ))}
              </STableBodyWrapper>
            </SExpenseTable>
          </STableSection>
          {/* <ExpenseForm /> */}
        </STables>
      </SMain>
    </>
  );
}

export default Main;
