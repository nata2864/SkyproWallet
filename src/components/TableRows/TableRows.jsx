import {
    STableFirstRowHead,
    STableFirstRow,
    STableOrderRow,
    IconButton,
    SIcons,
  } from "./TableRows.styled";
  import { format } from 'date-fns';
  
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

  function formatDate(dateString) {
    if (!dateString) {
      return ''; // Если пустое значение, возвращаем пустую строку
    }
  
    const date = new Date(dateString); // Преобразуем строку ISO в объект Date
  
    if (isNaN(date)) {
      console.error('Invalid date:', dateString); // Логируем ошибку, если дата некорректна
      return ''; // Возвращаем пустую строку, если дата некорректна
    }
  
    // Возвращаем отформатированную дату в нужном формате
    return format(date, 'dd-MM-yyyy');
  }
  
  
  export const TableRow = ({
    description,
    category,
    date,
    amount,
    onEdit,
    onDelete,
  }) => {
    console.log(description, category, date, amount); // Проверка данных
    return (
      <STableOrderRow>
        <td>{description}</td>
        <td>{category}</td>
        <td>{formatDate(date)}</td>
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
  };
  