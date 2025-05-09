import {
  STableFirstRowHead,
  STableFirstRow,
  STableOrderRow,
  IconButton,
  SIcons,
} from "./TableRows.styled";




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
      <td>{date}</td>
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
