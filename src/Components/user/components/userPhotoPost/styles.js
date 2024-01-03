import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  & #img {
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form``;

export const PreviewImg = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;
  &::after {
    content: "";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;
