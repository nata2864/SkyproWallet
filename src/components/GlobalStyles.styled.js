import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

//   :root {
//     --color-primary: #1fa46c;
//     --color-secondary: #333;
//     --font-main: Montserrat, sans-serif;
//   }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  *:before,
  *:after {
    box-sizing: border-box;
  }

//   a,
//   a:visited {
//     text-decoration: none;
//     cursor: pointer;
//     color:  '#000000';
//   }

//   button,
//   ._btn {
//     cursor: pointer;
//     outline: none;
//     background:  '#f0f0f0';
//     color:  '#000000';
//     border:  '1px solid #ddd';
//   }

//   ul li {
//     list-style: none;
//   } 

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
