import styled from "styled-components";
import { textSizes } from "../../const";
// import { Link } from "react-router-dom";

// import { Button } from "../Button/Button.styled";

import { Title, InputAuthForm,AuthButton } from "../AuthForm/AuthForm.styled";
import { inputColors } from "../../const";

// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   // overflow-x: hidden;
//   // overflow-y: scroll;
// `;

// export const Container = styled.div`
//   display: block;
//   width: 100vw;
//   min-height: 100vh;
//   margin: 0 auto;
// `;

// export const Modal = styled.div`
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const ModalBlok = styled.div`
//   display: block;
//   margin: 0 auto;
//   background-color: #ffffff;
//   width: 379px;
//   // width: 100%;
//   padding: 50px 60px;
//   border-radius: 30px;
//   box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
// `;

export const TitleForm = styled(Title)`
 text-align: left;
`;
// export const Form = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

export const InputExpenseForm = styled(InputAuthForm)`
  margin-bottom: 24px;
   border-color: ${({ error, isFocused }) =>
     error
       ? inputColors.error.border
       : isFocused
       ? inputColors.active.border
       : inputColors.static.border};
 
   background: ${({ error, isFocused }) =>
     error
       ? inputColors.error.background
       : isFocused
       ? inputColors.active.background
       : inputColors.static.background};
 `;


export const InputTitle = styled.p`
 text-align: left;
  margin-bottom: 16px;
 
    font-weight: ${textSizes.medium.fontWeight};
    font-size: ${textSizes.medium.fontSize};
  
`;

export const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

export const ExpenseButton = styled(AuthButton)`
  margin-top: 0px;
  margin-bottom: 0px;

    background-color: ${(props) =>
    props.disabled ? "#b0b0b0" : "#4caf50"};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
