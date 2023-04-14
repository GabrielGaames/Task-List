import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Vertical from "../../components/Logotipo/vertical";

import * as C from "./styles";

const CadastrarTarefas = () => {
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const objetos = {
    nome: nome,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const usuario = {
      usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
    };
    var total = Object.assign(objetos, usuario);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
      },
      body: JSON.stringify(total),
    };

    return fetch("http://localhost:3000/api/tasks", options).then(
      (response) => {
        localStorage.setItem("cadastrar", JSON.stringify({ objetos }));

        return response.json(), navigate("/home");
      }
    );
  }

  return (
    <>
      <Vertical />
      <Input
        type="text"
        placeholder="Digite o nome da nova Tarefa"
        value={nome}
        onChange={(e) => [setNome(e.target.value), setError("")]}
      />
      <C.labelError>{error}</C.labelError>
      <Button Text="Cadastrar Cliente" onClick={handleSubmit} />
    </>
  );
};

export default CadastrarTarefas;
