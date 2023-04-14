import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Vertical from "../../components/Logotipo/vertical";

import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Vertical />
      <br></br>
      <Button
        Text="Cadastrar Tarefas"
        onClick={() => [navigate("/cadastrarTarefas")]}
      >
        CadastrarTarefas
      </Button>
      <Button
        Text="Listar Tarefas"
        onClick={() => [navigate("/pesquisarTarefas")]}
      >
        ListarTarefas
      </Button>
      <br></br>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </>
  );
};

export default Home;
