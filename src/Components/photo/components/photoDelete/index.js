import React from "react";
import * as S from "./styles.js";
import { PHOTO_DELETE } from "../../../../api.js";
import useFetch from "../../../../Hooks/useFetch.js";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      {loading ? (
        <S.Buttons disabled>Deletar</S.Buttons>
      ) : (
        <S.Buttons onClick={handleClick}>Deletar</S.Buttons>
      )}
    </>
  );
};

export default PhotoDelete;
