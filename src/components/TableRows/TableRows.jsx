import {
  STableFirstRowHead,
  STableFirstRow,
  STableOrderRow,
  IconButton,
  SIcons,
} from "./TableRows.styled";

const MiniBucket = "/first-box/mini-bucket.svg";
const MiniPen = "/first-box/mini-pen.svg";

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
}) => (
  <STableOrderRow>
    <td>{description}</td>
    <td>{category}</td>
    <td>{date}</td>
    <td>{amount}</td>
    <SIcons>
      <IconButton onClick={onEdit}>
        <img src={MiniPen} alt="Редактировать" />
      </IconButton>
      <IconButton onClick={onDelete}>
        <img src={MiniBucket} alt="Удалить" />
      </IconButton>
    </SIcons>
  </STableOrderRow>
);
