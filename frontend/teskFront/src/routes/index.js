import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PesquisarCliente from "../pages/PesquisarTarefas";
import PesquisarTarefas from "../pages/PesquisarTarefas";
import CadastrarTarefas from "../pages/CadastrarTarefas";

const Private = ({ Item }) => {
  const { signin } = useAuth();

  return signin > 0 ? <Item /> : <Signin />;
};
const RoutesApp = () => {
  return (
    // Aqui estamos criando a parte das rotas do aplicativo e redirecionando-as.
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/cadastrarTarefas"
            element={<CadastrarTarefas />}
          />
          <Route
            exact
            path="/pesquisarTarefas"
            element={<PesquisarTarefas />}
          />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
