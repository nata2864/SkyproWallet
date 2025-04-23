import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
   /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  */

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    color:  '#000000';
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
    background:  '#f0f0f0';
    color:  '#000000';
    border:  '1px solid #ddd';
  }

  ul li {
    list-style: none;
  } 

  /* html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: '#ffffff';
    color:  '#000000';
    transition: all 0.25s ease;
  } */
  `