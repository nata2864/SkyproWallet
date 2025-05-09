import {
  STableFirstRowHead,
  STableFirstRow,
  STableOrderRow,
  IconButton,
  SIcons,
} from "./TableRows.styled";
import { format } from "date-fns";



export const TableFirstRow = () => (
  <STableFirstRowHead>
    <STableFirstRow>
      <th>Описание</th>
      <th>Категория</th>
      <th>Дата</th>
      <th>Сумма</th>
      <th>Действия</th>
    </STableFirstRow>
  </STableFirstRowHead>
);

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  if (isNaN(date)) {
    console.error("Invalid date:", dateString);
    return "";
  }
  return format(date, "dd-MM-yyyy");
}

export const TableRow = ({
  description,
  category,
  date,
  amount,
  onEdit,
  onDelete,
}) => {
  return (
    <STableOrderRow>
      <td>{description}</td>
      <td>{category}</td>
      <td>{formatDate(date)}</td>
      <td>{amount}</td>
      <SIcons>
        <IconButton onClick={onEdit}>
          <img src="/first-box/mini-pen.svg" alt="Редактировать" />
        </IconButton>
        <IconButton onClick={onDelete}>
          <img src= "/first-box/mini-bucket.svg" alt="Удалить" />
        </IconButton>
      </SIcons>
    </STableOrderRow>
  );
};
