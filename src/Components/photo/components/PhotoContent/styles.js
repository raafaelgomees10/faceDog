import styled, { keyframes } from "styled-components";
import ViewIcon from "../../../../Assets/visualizacao-black.svg";

const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const Container = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;

  @media (max-width: 1023px) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const Content = styled.div`
  grid-row: 1/4;

  @media (max-width: 1023px) {
    grid-row: 1;
  }
`;

export const Image = styled.img``;

export const Author = styled.p`
  opacity: 1;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a:hover {
    text-decoration: underline;
  }

  /* 
    .comments{
        padding: 0 2rem;
    } */
`;

export const Viewers = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.25rem;
    background: url(${ViewIcon}) no-repeat;
  }
`;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  > li {
    margin-right: 2rem;

    &::before {
      content: "";
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }
`;
