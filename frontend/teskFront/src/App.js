import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import * as SC from "./styles/stylesContainer";
import "bootstrap/dist/css/bootstrap.min.css";

//aqui estamos renderizando nossa aplicação, usando as rotas definidas e o css no escopo
const App = () => (
  <AuthProvider>
    <SC.Container>
      <SC.Content>
        <RoutesApp />
        <GlobalStyle />
      </SC.Content>
    </SC.Container>
  </AuthProvider>
);

export default App;
