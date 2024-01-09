import React, { useState } from "react";
import * as S from "./styles.js";
import Error from "../../../helper/error.js";
import { COMMENT_POST } from "../../../../api.js";
import useFetch from "../../../../Hooks/useFetch.js";
import { ReactComponent as Send } from "../../../../Assets/enviar.svg";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
      //comments são os comentarios antigos, json é o novo comentario, que está sendo inserido junto aos demais
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Textarea
        id="comment"
        name="comment"
        placeholder="Escreva um comentario..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <S.Buttons>
        <Send />
      </S.Buttons>
      <Error error={error} />
    </S.Form>
  );
};

export default PhotoCommentsForm;
