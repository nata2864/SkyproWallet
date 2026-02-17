import styled from "styled-components";
import { textSizes, inputColors } from "../../const";
import { Link } from "react-router-dom";

// В связи с использованием в моб версии, перенесено всё с AuthForm.
export const FormContainer = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.h2`
  font-weight: ${textSizes.largeH2.fontWeight};
  font-size: ${textSizes.largeH2.fontSize};
  line-height: 100%;
  margin-bottom: 24px;
  text-align: left; /* Ваш override */
`;

export const InputTitle = styled.p`
  text-align: left;
  margin-bottom: 16px;
  font-weight: ${textSizes.medium.fontWeight};
  font-size: ${textSizes.medium.fontSize};
`;

export const InputExpenseForm = styled.input`
  /* Стили из BasisInput */
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px 16px;
  border: 0.5px solid;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;

  /* Стили, специфичные для формы расходов */
  margin-bottom: 24px;
  border-color: ${({ $error, $isFocused }) =>
    $error
      ? inputColors.error.border
      : $isFocused
      ? inputColors.active.border
      : inputColors.static.border};

  background: ${({ $error, $isFocused }) =>
    $error
      ? inputColors.error.background
      : $isFocused
      ? inputColors.active.background
      : 'transparent'};
  
  &:focus {
    outline: none;
    border-color: #27AE60;
  }
`;

export const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

export const ExpenseButton = styled.button`
  /* Стили из базовой Button */
  width: 100%;
  border-radius: 6px;
  padding: 12px;
  color: #fff;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;
  background: rgb(31, 164, 108);
  &:hover {
    opacity: 0.9;
  }

  margin-top: 0px;
  margin-bottom: 0px;
  background-color: ${(props) => (props.disabled ? "#B0B0B0" : "#27AE60")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: background-color 0.2s ease-in-out;
`;
export const ModalBlok = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 16px;
  padding-top: 12px;
  width: 100%;
  max-width: 380px;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 450px) {
    max-width: 100%;
    min-height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ToExpenses = styled(Link)`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  margin-top: 24px;
  align-items: baseline;
  text-decoration: none;
`;