import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <Container>
      {skeleton && <Skeleton />}
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Container>
  );
};

export default Image;

const Container = styled.div`
  display: grid;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;

const skeleton = keyframes`
    from{
      background-position: 0px;
    }
    to{
      background-position: -200%;
    }
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeleton} 1.5s infinite linear;
`;
