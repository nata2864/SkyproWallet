import {
  SMain,
  SMainHeader,
  SMainHeaderContainer,
  SNewExpenseButton,
  STableHeader,
  STableSection,
  SSectionTitle,
  STables,
  STableBodyWrapper,
  SMobileActions,
  MobileActionButton,
  MobileActionLink,
} from './Main.styled';
import { TableRow, TableFirstRow } from '../TableRows/TableRows';
import ExpenseForm from '../ExpenseForm/ExpenseForm.jsx';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExpenseContext } from '../../context/ExpenseContext';
import { categoryTranslations, RoutesApp } from '../../const';
import { formatedDate } from '../../utils/utils';
import Filters from '../Fiters/Fiters';
import { useViewport } from '../../hooks/useViewport';

function Main() {
  const { expenses, deleteExpenseByID, getExpenses } =
    useContext(ExpenseContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState(false);
  const [filteredData, setFilteredData] = useState(expenses);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const isMobile = useViewport(451); // ПРОВЕРКА МОБИЛЬНОЙ ВЕРСИИ
  const navigate = useNavigate();

  useEffect(() => {
    getExpenses(selectedCategories);
  }, [selectedCategories, getExpenses]);
  useEffect(() => {
    setFilteredData(expenses);
  }, [expenses]);
  const handleEditClick = (expenseId) => {
    setSelectedExpense(expenseId);
  };
  const handleRowSelect = (expenseId) => {
    setSelectedExpense((prevSelected) =>
      prevSelected === expenseId ? null : expenseId
    );
  };
  const handleEditComplete = () => {
    setSelectedExpense(null);
  };

  const handleDelete = async (expenseId) => {
    await deleteExpenseByID({ id: expenseId });
  };

  return (
    <>
      <SMain>
        <SMainHeaderContainer>
          <SMainHeader>Мои расходы</SMainHeader>
          {isMobile && (
            <SNewExpenseButton onClick={() => navigate(RoutesApp.NEW_EXPENSE)}>
              <img src="/first-box/new-expense.svg" alt="add" />
              Новый расход
            </SNewExpenseButton>
          )}
        </SMainHeaderContainer>

        <STables>
          <STableSection>
            <STableHeader>
              {!isMobile && <SSectionTitle>Таблица расходов</SSectionTitle>}
              <Filters
                expenses={expenses}
                setFilteredData={setFilteredData}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedSorting={selectedSorting}
                setSelectedSorting={setSelectedSorting}
              />
            </STableHeader>
            <TableFirstRow />
            <STableBodyWrapper>
              {filteredData.map((expense) => (
                <TableRow
                  key={expense._id}
                  description={expense.description}
                  category={
                    categoryTranslations[expense.category] || expense.category
                  }
                  date={formatedDate(expense.date)}
                  amount={`${expense.sum.toLocaleString('ru-RU')} ₽`}
                  onEdit={() => handleEditClick(expense._id)}
                  onSelect={() => handleRowSelect(expense._id)}
                  onDelete={() => handleDelete(expense._id)}
                  isSelected={selectedExpense === expense._id}
                />
              ))}
            </STableBodyWrapper>
          </STableSection>
          {!isMobile && (
            <ExpenseForm
              selectedExpense={selectedExpense}
              onEditComplete={handleEditComplete}
            />
          )}
        </STables>
        {isMobile && selectedExpense && (
          <SMobileActions>
            <MobileActionButton
              onClick={() => navigate(`/new-expense/${selectedExpense}`)}
            >
              Редактировать расход
            </MobileActionButton>
            <MobileActionLink onClick={() => handleDelete(selectedExpense)}>
              Удалить расход
            </MobileActionLink>
          </SMobileActions>
        )}
      </SMain>
    </>
  );
}

export default Main;
