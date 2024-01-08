import React from "react";
import * as S from "./styles.js";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  return (
    <S.Li onClick={() => setModalPhoto(photo)}>
      <S.Image src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};

export default FeedPhotosItem;
