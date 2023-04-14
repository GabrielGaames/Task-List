import { createGlobalStyle } from "styled-components";
//estamos aplicando o css global aqui
const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif
  }
  container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 35px;
    background-color: #deb887;
  }
`;

export default GlobalStyle;
