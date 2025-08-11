import * as S from './TableRows.styled';
import { useViewport } from '../../hooks/useViewport';

export const TableFirstRow = () => (
  <S.RowHeader>
    <div>Описание</div>
    <div>Категория</div>
    <div>Дата</div>
    <div>Сумма</div>
  </S.RowHeader>
);

export const TableRow = ({
  description,
  category,
  date,
  amount,
  onSelect,
  onDelete,
  onEdit,
  isSelected,
}) => {
  const isMobile = useViewport(451);
  //Теперь отдельная клетка с количеством и туда для десктопа отправляются иконки.
  return (
    <S.RowWrapper>
      <S.Row $isSelected={isSelected} onClick={onSelect}>
        <S.Cell title={description}>{description}</S.Cell>
        <S.Cell>{category}</S.Cell>
        <S.Cell>{date}</S.Cell>
        <S.AmountCell>
          <span>{amount}</span>
          {!isMobile && (
            <S.Icons>
              <S.IconButton
                $isSelected={isSelected}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
              >
                <img src="/first-box/mini-pen.svg" alt="Иконка карандаша" />
              </S.IconButton>
              <S.IconButton
                $isSelected={isSelected}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                <img src="/first-box/mini-bucket.svg" alt="Иконка корзинки" />
              </S.IconButton>
            </S.Icons>
          )}
        </S.AmountCell>
      </S.Row>
    </S.RowWrapper>
  );
};
