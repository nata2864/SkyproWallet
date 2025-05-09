import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  *:before,
  *:after {
    box-sizing: border-box;
  }


   html,
  body {
    width: 100%;
     height: 100%;
    font-family: 'Montserrat', Arial,  sans-serif;
    background-color: #F4F5F6;
    color:  '#000000';
  } 

   ::placeholder {
    font-family: 'Montserrat', sans-serif;   
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: rgba(153, 153, 153, 1);

  }
  `;
