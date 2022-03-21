import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Div = styled.div`
  height: 200px;
  background-color: #d77fa1;
`;

const Test2 = () => {
  const history = useHistory();

  return (
    <>
      <Div onClick={() => history.goBack()}>goBack</Div>
      <Div onClick={() => history.push("/test")}>push</Div>
    </>
  );
};

export default Test2;
