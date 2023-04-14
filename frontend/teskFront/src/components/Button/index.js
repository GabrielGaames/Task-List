import React from "react";
import * as C from "./styles";
// aqui estamos criando nossos componentes. Esse é do tipo Button
const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;
