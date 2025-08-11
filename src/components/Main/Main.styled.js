import styled from 'styled-components';
import { textSizes } from '../../const';

export const SMain = styled.main`
  background: rgb(244, 245, 246);
  padding-left: 118px;
  padding-right: 120px;
  padding-bottom: 72px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 450px) {
    padding: 0 0 0 0;
    background: white;
  }
`;

// Новый контейнер для заголовка и кнопки
export const SMainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 25px;

  @media (max-width: 450px) {
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 20px;
  }
`;

export const SMainHeader = styled.h1`
  font-size: ${textSizes.largeH1.fontSize};
  font-weight: ${textSizes.largeH1.fontWeight};
  color: ${textSizes.largeH1.color};
  margin: 0px;

  @media (max-width: 450px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }
`;

// Новая кнопка
export const SNewExpenseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: transparent;
  padding: 8px 16px;
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
`;

export const STables = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const STableSection = styled.div`
  width: 789px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 450px) {
    width: 100%;
    min-height: 400px;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
  }
`;

export const STableHeader = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 32px;
  align-items: center;
  justify-content: space-between;
  margin-right: 34px;

  @media (max-width: 450px) {
    margin: 0 0 16px 0;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const SSectionTitle = styled.h2`
  font-weight: ${textSizes.largeH2.fontWeight};
  font-size: ${textSizes.largeH2.fontSize};
  margin-left: 32px;
`;

export const STableBodyWrapper = styled.div`
  display: block;
  max-height: 618px;
  overflow-y: auto;

  @media (max-width: 450px) {
    background-color: #fff;
    border-radius: 10px;
    max-height: none;
    overflow-y: visible;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
`;
export const SMobileActions = styled.div`
  display: none; // По умолчанию скрыто

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    z-index: 100;
  }
`;

export const MobileActionButton = styled.button`
  width: 100%;
  border-radius: 6px;
  padding: 12px;
  background: rgb(31, 164, 108);
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const MobileActionLink = styled.button`
  background: transparent;
  border: none;
  color: #999999;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  font-family: Montserrat;
`;
