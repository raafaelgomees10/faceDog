import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  &.single {
    margin: 1rem 0;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

const Latir = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Buttons = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:focus,
  &:hover {
    outline: none;
    > svg,
    * {
      path {
        fill: #fea;
        stroke: #fb1;
      }
      g {
        animation: ${Latir} 0.6s infinite;
      }
    }
  }
`;
