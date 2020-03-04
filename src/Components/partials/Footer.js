import styled from "styled-components";
import React from "react";
import Todo from "../Todo";
import Chat from "../Chat";
const Footer = styled.div`
  width: 100%;
  background-color: red;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;
const Ment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <Footer>
      <Todo />
      <Ment>hi</Ment>
      <Chat />
    </Footer>
  );
};
