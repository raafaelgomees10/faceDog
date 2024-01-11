import styled, { css } from "styled-components";

export const Section = styled.section`
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const baseStyles = css`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`;

export const Total = styled.div`
  ${baseStyles}
  grid-column: 1/3;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 767px) {
    grid-column: 1;
  }
`;

export const GraphItem = styled.div`
  ${baseStyles}
`;
