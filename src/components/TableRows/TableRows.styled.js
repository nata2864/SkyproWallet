import styled from 'styled-components';
import { textSizes } from '../../const';
import { getSelectedColor } from '../../utils/styledUtils';

const getTextStyles = () => `
  font-family: Montserrat;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  letter-spacing: 0px;
`;

// Вместо Флекс Теперь Грид
export const RowHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  align-items: center;
  gap: 16px;
  padding: 7px 16px;
  border-bottom: 0.5px solid rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  ${getTextStyles()}
`;
export const RowWrapper = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'rgba(219, 255, 233, 1)' : 'transparent'};
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  align-items: center;
  padding: 12px 16px;
  box-sizing: border-box;
  gap: 16px;
  color: ${({ $isSelected }) => getSelectedColor($isSelected)};
  ${getTextStyles()}
  cursor: pointer;
  &:hover {
    background-color: ${({ $isSelected }) =>
      !$isSelected && 'rgba(219, 255, 233, 1);'};
    color: ${({ $isSelected }) => getSelectedColor(!$isSelected)};
  }
`;

export const Cell = styled.div`
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AmountCell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  filter: ${({ $isSelected }) =>
    $isSelected
      ? 'brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(365%) hue-rotate(101deg) brightness(75%) contrast(80%)'
      : 'none'};

  &:focus {
    outline: none;
  }

  img {
    display: block;
  }
`;
