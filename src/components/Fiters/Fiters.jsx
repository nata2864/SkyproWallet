import { useState } from "react";
import {
  STableFilters,
  STableFiltersGroup,
  SCategoryLink,
  SCategoryFiltration,
  SCategoryFiltrationElement,
  SSorting,
  SSortingElement,
  SSortLink,
} from "./Fiters.styled";
import { categoryTranslations } from "../../const";
import { Tag } from "../Categories/Categories.styled";

const MiniCar = "/second-box/mini-car.svg";
const MiniFood = "/second-box/mini-food.svg";
const MiniGames = "/second-box/mini-games.svg";
const MiniHouse = "/second-box/mini-house.svg";
const MiniOther = "/second-box/mini-other.svg";
const MiniTeacher = "/second-box/mini-teacher.svg";

const categories = [
  { name: "Еда", icon: MiniFood },
  { name: "Транспорт", icon: MiniCar },
  { name: "Жилье", icon: MiniHouse },
  { name: "Развлечение", icon: MiniGames },
  { name: "Образование", icon: MiniTeacher },
  { name: "Другое", icon: MiniOther },
];

const sortings = [{ name: "Дате" }, { name: "Сумме" }];

function Filters({
  expenses,
  setFilteredData,
  selectedCategory,
  setSelectedCategory,
  selectedSorting,
  setSelectedSorting,
}) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);

  const handleCategorySelect = (category) => {
    const newCategory = category === selectedCategory ? false : category;
    setSelectedCategory(newCategory);

    if (!newCategory) {
      setFilteredData(expenses);
    } else {
      const categoryKey = Object.keys(categoryTranslations).find(
        (key) => categoryTranslations[key] === category
      );
      setFilteredData(
        expenses.filter((expense) => expense.category === categoryKey)
      );
    }
  };

  const handleSortingsSelect = (sorting) => {
    const newSorting = sorting === selectedSorting ? false : sorting;
    setSelectedSorting(newSorting);

    if (!newSorting) {
      setFilteredData(expenses);
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

  return (
    <STableFilters>
      <STableFiltersGroup
        onClick={() => {
          setIsOpenCategory(!isOpenCategory);
          if (isOpenSorting) setIsOpenSorting(false);
        }}
      >
        Фильтровать по категории
        <SCategoryLink href="#">
          {selectedCategory ? selectedCategory.toLowerCase() : "еда"}
        </SCategoryLink>
        <svg
          onClick={() => setIsOpenCategory(!isOpenCategory)}
          width="6"
          height="5"
          viewBox="0 0 6.06213 5.25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.03 5.25L6.06 0L0 0L3.03 5.25Z"
            fill="#000000"
          />
        </svg>
        {isOpenCategory && (
          <SCategoryFiltration>
            {categories.map((category) => (
              <Tag
                key={category.name}
                onClick={() => {
                  handleCategorySelect(category.name);
                  setIsOpenCategory(false);
                }}
                $isSelected={selectedCategory === category.name}
              >
                <img src={category.icon} alt="icon" />
                {category.name}
              </Tag>
            ))}
          </SCategoryFiltration>
        )}
      </STableFiltersGroup>

      <STableFiltersGroup
        onClick={() => {
          setIsOpenSorting(!isOpenSorting);
          if (isOpenCategory) setIsOpenCategory(false);
        }}
      >
        Сортировать по
        <SSortLink href="#">
          {selectedSorting ? selectedSorting.toLowerCase() : "дате"}
        </SSortLink>
        <svg
          onClick={() => setIsOpenSorting(!isOpenSorting)}
          width="6"
          height="5"
          viewBox="0 0 6.06213 5.25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.03 5.25L6.06 0L0 0L3.03 5.25Z"
            fill="#000000"
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
  );
}

export default Filters;
