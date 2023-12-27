import { Link } from "react-router-dom";
import styled from "styled-components";
import loginImage from "../../Assets/login.jpg";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url(${loginImage}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const LinkRecovery = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const Box = styled.div`
  margin-top: 4rem;

  > p {
    margin: 2rem 0;
  }
`;
export const SubTitle = styled.h2`
  font-family: "Spectral", Georgia;
  line-height: 1;
  font-size: 2rem;

  &::after {
    content: "";
    display: block;
    background-color: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;
export const LinkCreate = styled(Link)`
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background-color: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
