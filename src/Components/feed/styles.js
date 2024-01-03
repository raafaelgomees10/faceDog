import styled from "styled-components";
import ViewIcon from "../../Assets/visualizacao.svg";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Li = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 767px) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const Image = styled.img`
  grid-area: 1/1;
`;

export const Span = styled.span`
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  grid-area: 1/1;
  display: flex;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  &::before {
    width: 16px;
    height: 10px;
    content: "";
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${ViewIcon}) no-repeat;
  }
`;
