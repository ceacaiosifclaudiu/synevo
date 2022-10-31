import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    background-color: transparent;
    color: ${Variables.BLUE};
    font-family: 'Poppins', Sans-Serif, Open-Sans, Helvetica;
    box-sizing: border-box;
  }
  .bellNavBar{
  transform: rotate(45deg);
  }
`;

export default GlobalStyle;
