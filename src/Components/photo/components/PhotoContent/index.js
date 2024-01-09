import React, { useContext } from "react";
import * as S from "./styles.js";
import { Link } from "react-router-dom";
import Image from "../../../helper/image.js";
import PhotoDelete from "../photoDelete/index.js";
import PhotoComments from "../PhotoComments/index.js";
import { UserContext } from "../../../../UserContext.js";

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <S.Container>
      <S.Content>
        <Image src={photo.src} alt={photo.title} />
      </S.Content>
      <S.Details>
        <div>
          <S.Author>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
