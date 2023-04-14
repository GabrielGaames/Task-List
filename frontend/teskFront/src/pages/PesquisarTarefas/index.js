import React from "react";
import { Button, Table } from "react-bootstrap";
import Vertical from "../../components/Logotipo/horizontal";

import * as C from "./styles";

class PesquisarTarefas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: [],
      nome: "",
      status: "",
    };
  }
  componentDidMount() {
    this.buscarTarefas();
  }
  componentWillUnmount() {}

  buscarTarefas = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
      },
    };

    fetch("http://localhost:3000/api/tasks", options)
      .then((response) => response.json())
      .then((dados) => {
        this.setState({ clientes: dados });
      });
  };

  deletarTarefas(id) {
    fetch("" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
      },
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarTarefas();
      }
    });
  }

  render() {
    return (
      <>
        <Vertical />
        <C.Tabela>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>
                  <strong>Clientes Adicionados</strong>
                </td>
              </tr>
              {this.state.clientes.map((cliente) => (
                <tr>
                  <td class="ordenacao" title={cliente.email}>
                    {cliente.email}

                    <Button
                      variant="danger"
                      onClick={() => this.deletarTarefas(cliente.id)}
                    >
                      Ficha Avaliativa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </C.Tabela>
      </>
    );
  }
}
export default PesquisarTarefas;
