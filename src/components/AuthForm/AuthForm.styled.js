import styled, { css } from "styled-components";
import { textSizes } from "../../const";
import { Link } from "react-router-dom";
import { BasisInput } from "../Input/Input.styled";
import { Button } from "../Button/Button.styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlok = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 32px;
  width: 100%;
  max-width: 380px;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 450px) {
    max-width: 100%;
    min-height: 100vh;
    padding: 151px 16px;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: ${textSizes.largeH2.fontWeight};
  font-size: ${textSizes.largeH2.fontSize};
  line-height: 100%;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  color: rgb(242, 80, 80);
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 12px;
  padding-left: 4px;
  text-align: center;
`;

export const InputAuthForm = styled(BasisInput)`
  margin-bottom: 12px;
  border-color: ${({ $error, $isFocused }) =>
    $error
      ? 'rgb(242, 80, 80)'
      : $isFocused
      ? '#1FA46C'
      : '#999999'};

  background: ${({ $error, $isFocused }) =>
    $error
      ? 'rgb(255, 235, 235)'
      : $isFocused
      ? '#DBFFE9'
      : 'transparent'};

  @media (max-width: 450px) {
    height: auto;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
    margin-bottom: 12px;
    width: 100%;
    max-width: 100%;
    
    border-color: #D1D1D1;
    background: #FFF;

    ${({ $success }) =>
      $success &&
      css`
        border-color: rgb(31, 164, 108);
        background: rgb(219, 255, 233);
      `}

    ${({ $error }) =>
      $error &&
      css`
        border-color: rgb(242, 80, 80);
        background: rgb(255, 235, 235);
      `}
  }
`;

export const AuthButton = styled(Button)`
  margin-bottom: 24px;
  background-color: ${(props) =>
    props.disabled ? "rgba(153, 153, 153, 1)" : "rgba(31, 164, 108, 1)"};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  @media (max-width: 450px) {
    height: auto;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    margin-top: 12px;
    margin-bottom: 24px;
    background-color: #27AE60;
  }
`;

export const TextGroep = styled.div`
  text-align: center;
`;

export const ModalText = styled.p`
  color: rgba(148, 166, 190, 0.4);
  font-weight: ${textSizes.small.fontWeight};
  font-size: ${textSizes.small.fontSize};
  line-height: 100%;

  @media (max-width: 450px) {
    font-size: 12px;
    color: #A0A0A0;
    margin-bottom:4px
  }
`;

export const ModalLink = styled(ModalText).attrs({ as: Link })`
  text-decoration: underline;
  margin-top: 4px;
  cursor: pointer;

`;