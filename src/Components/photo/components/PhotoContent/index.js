import React from "react";
import * as S from "./styles.js";
import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments/index.js";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <S.Container>
      <S.Content>
        <S.Image src={photo.src} alt={photo.title} />
      </S.Content>
      <S.Details>
        <div>
          <S.Author>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <S.Viewers>{photo.acessos}</S.Viewers>
          </S.Author>

          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </S.Details>
      <PhotoComments id={photo.id} comments={comments} />
    </S.Container>
  );
};

export default PhotoContent;
