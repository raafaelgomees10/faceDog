import React from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import Image from "../../../helper/image";
import { openModal } from "../../../../store/ui";
import { fetchPhoto } from "../../../../store/photo";

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  };

  return (
    <S.Li onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};

export default FeedPhotosItem;
