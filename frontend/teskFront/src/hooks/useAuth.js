import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
//Estamos criando o useAuth para realizar a autenticação do usuario
const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
