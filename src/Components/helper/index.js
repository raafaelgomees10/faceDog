import React from "react";
import styled from "styled-components";

const Helper = ({ error }) => {
  if (!error) {
    return null;
  }
  return <Text dangerouslySetInnerHTML={{ __html: error }} />;
};

export default Helper;

const Text = styled.p`
  color: #f31;
  margin: 1rem 0;
`;
