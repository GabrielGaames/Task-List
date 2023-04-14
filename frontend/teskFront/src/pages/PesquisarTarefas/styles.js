import styled from "styled-components";


export const Tabela = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  width: 340px;
  max-width: 100%;
  /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #deb887;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #deb887;
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ordenacao {
    display: flex;
    flex-direction: column;
  }
`;
;



