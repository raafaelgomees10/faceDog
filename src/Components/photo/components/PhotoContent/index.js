import React, { useContext } from "react";
import * as S from "./styles.js";
import { Link } from "react-router-dom";
import Image from "../../../helper/image.js";
import PhotoDelete from "../photoDelete/index.js";
import PhotoComments from "../PhotoComments/index.js";
import { UserContext } from "../../../../UserContext.js";
import { useSelector } from "react-redux";

const PhotoContent = ({ single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = useSelector((state) => state.photo.data);

  return (
    <S.Container className={`${single ? "single" : ""}`}>
      <S.Content className={`${single ? "row" : ""}`}>
        <Image src={photo.src} alt={photo.title} />
      </S.Content>
      <S.Details className={`${single ? "fix" : ""}`}>
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
          <S.List>
            <S.Item>{photo.peso} kg</S.Item>
            <S.Item>{photo.idade} anos</S.Item>
          </S.List>
        </div>
      </S.Details>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </S.Container>
  );
};

export default PhotoContent;
