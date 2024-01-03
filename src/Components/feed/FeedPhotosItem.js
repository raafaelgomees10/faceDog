import React from "react";
import * as S from "./styles.js";

const FeedPhotosItem = ({ photo }) => {
  return (
    <S.Li>
      <S.Image src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};

export default FeedPhotosItem;
