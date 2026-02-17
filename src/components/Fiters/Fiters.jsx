import { useState } from 'react';
import {
  STableFilters,
  STableFiltersGroup,
  SCategoryLink,
  SCategoryFiltration,
  SSorting,
  SSortingElement,
  SSortLink,
} from './Fiters.styled';
// Теперь категория переводится в АПИ import { categoryTranslations } from '../../const';
import { Tag } from '../Categories/Categories.styled';
import { categorieName } from '../../const';
import { useViewport } from '../../hooks/useViewport';

const sortings = [{ name: 'Дате' }, { name: 'Сумме' }];
function Filters({
  expenses,
  setFilteredData,
  selectedCategories,
  setSelectedCategories,
  selectedSorting,
  setSelectedSorting,
}) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const isMobile = useViewport(451);
  const handleCategorySelect = (categoryName) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(categoryName)) {
        return prevCategories.filter((c) => c !== categoryName);
      } else {
        return [...prevCategories, categoryName];
      }
    });
  };

  const handleSortingsSelect = (sorting) => {
    const newSorting = sorting === selectedSorting ? false : sorting;
    setSelectedSorting(newSorting);

    if (!newSorting) {
      setFilteredData(expenses);
    } else {
      setFilteredData((prevData) => {
        const sorted = [...prevData];
        if (sorting === 'Дате') {
          sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sorting === 'Сумме') {
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
        {!isMobile && selectedCategories && (
          <SCategoryLink href="#">
            {selectedCategories ? selectedCategories.join(', ') : 'еда'}
          </SCategoryLink>
        )}
        {isMobile && selectedCategories && (
          <SCategoryLink>{selectedCategories.join(', ')}</SCategoryLink>
        )}
        <svg
          onClick={() => setIsOpenCategory(!isOpenCategory)}
          width="6"
          height="5"
          viewBox="0 0 6.06213 5.25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.03 5.25L6.06 0L0 0L3.03 5.25Z" fill="#000000" />
        </svg>
        {isOpenCategory && (
          <SCategoryFiltration>
            {categorieName.map((category) => (
              <Tag
                key={category.name}
                onClick={() => {
                  handleCategorySelect(category.name);
                  setIsOpenCategory(false);
                }}
                $isSelected={selectedCategories.includes(category.name)}
              >
                <img src={category.srcIcon.default} alt="Иконка категории" />{' '}
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
        {!isMobile && (
          <SSortLink href="#">
            {selectedSorting ? selectedSorting.toLowerCase() : 'дате'}
          </SSortLink>
        )}
        {selectedSorting && (
          <SSortLink>{selectedSorting.toLowerCase()}</SSortLink>
        )}
        <svg
          onClick={() => setIsOpenSorting(!isOpenSorting)}
          width="6"
          height="5"
          viewBox="0 0 6.06213 5.25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.03 5.25L6.06 0L0 0L3.03 5.25Z" fill="#000000" />
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
