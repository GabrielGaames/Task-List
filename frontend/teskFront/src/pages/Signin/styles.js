import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #deb887;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 0px 15px 12px #000;
  background-color: #c8fefe;
  max-width: 350px;
  padding: 20px;
  border-radius: 30px;
`;

export const Label = styled.label`
  font-size: 40px;
  font-weight: 600;
  color: #101c46;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #000;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000;
  }
`;
