import React from "react";
import * as C from "./styles";
//Estamos criando o nossos input aqui para o usuario digitar
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
