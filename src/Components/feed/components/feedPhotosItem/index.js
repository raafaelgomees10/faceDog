import React from "react";
import * as S from "./styles.js";
import Image from "../../../helper/image.js";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  return (
    <S.Li onClick={() => setModalPhoto(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};

export default FeedPhotosItem;
