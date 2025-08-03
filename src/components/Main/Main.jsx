import { SMain, SMainHeader, SMainHeaderContainer, SNewExpenseButton, STableHeader, STableSection, SSectionTitle, STables, STableBodyWrapper } from "./Main.styled";
import { TableRow, TableFirstRow } from "../TableRows/TableRows";
import ExpenseForm from "../ExpenseForm/ExpenseForm ";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ExpenseContext } from "../../context/ExpenseContext";
import { categoryTranslations, RoutesApp } from "../../const";
import { formatedDate } from "../../utils/utils";
import Filters from "../Fiters/Fiters";
import { useViewport } from "../../hooks/useViewport";

function Main() {
  const { expenses, deleteExpenseByID } = useContext(ExpenseContext);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState(false);
  const [filteredData, setFilteredData] = useState(expenses);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const isMobile = useViewport(451); // ПРОВЕРКА МОБИЛЬНОЙ ВЕРСИИ
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!selectedCategory && !selectedSorting) {
      setFilteredData(expenses);
    }
  }, [expenses, selectedCategory, selectedSorting]);

  const handleEditClick = (expenseId) => {
    setSelectedExpense(expenseId);
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
              <img src="/new-expense-icon.svg" alt="add"/>
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
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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
                  category={categoryTranslations[expense.category] || expense.category}
                  date={formatedDate(expense.date)}
                  amount={`${expense.sum.toLocaleString("ru-RU")} ₽`}
                  onEdit={() => handleEditClick(expense._id)}
                  onDelete={() => handleDelete(expense._id)}
                  isSelected={selectedExpense === expense._id}
                />
              ))}
            </STableBodyWrapper>
          </STableSection>
          
          {/* Форма показывается только на десктопе */}
          {!isMobile && (
            <ExpenseForm
              selectedExpense={selectedExpense}
              onEditComplete={handleEditComplete}
            />
          )}
        </STables>
      </SMain>
    </>
  );
}

export default Main;
