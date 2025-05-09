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
} from "./Main.styled";
import { TableRow, TableFirstRow } from "../TableRows/TableRows";
import ExpenseForm from "../ExpenseForm/ExpenseForm ";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

function Main() {
  const { expenses } = useContext(ExpenseContext);

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
                {(Array.isArray(expenses) ? expenses : []).map((item) => (
                  <TableRow
                    key={item._id}
                    description={item.description}
                    category={item.category}
                    date={item.date}
                    amount={item.sum}
                    onEdit={() => handleEdit(item._id)}
                    onDelete={() => handleDelete(item._id)}
                  />
                ))}
              </tbody>
            </SExpenseTable>
          </STableSection>
          <ExpenseForm />
        </STables>
      </SMain>
    </>
  );
}

export default Main;
