import styled from "styled-components";

export const Container = styled.div``;

export const List = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  &.single {
    padding: 0px;
  }
`;

export const Item = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
