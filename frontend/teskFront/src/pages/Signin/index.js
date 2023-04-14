import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";

import Vertical from "../../components/Logotipo/vertical";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const objetos = {
    email: email,
    senha: senha,
  };

  async function handleLogin(event) {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetos),
    };

    return fetch("http://localhost:3000/api/usuario/login", options)
      .then((response) => {
        if (response.status === 200) {
          alert("ok!");
          navigate("/home");
          return response.json();
        } else {
          alert("erro!");
        }
      })
      .then((signin) => {
        localStorage.setItem("signin", JSON.stringify({ signin }));
        const login = localStorage.getItem("signin");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <Vertical />

      <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
      />
      <C.labelError>{error}</C.labelError>
      <Button Text="Entrar" onClick={handleLogin} />
      <C.LabelSignup>
        Não tem uma conta?
        <C.Strong>
          <Link to="/signup">&nbsp;Registre-se</Link>
        </C.Strong>
      </C.LabelSignup>
    </>
  );
};

export default Signin;
