import React, { useState, useContext, useRef, useEffect } from "react";
import * as S from "./styles.js";
import { UserContext } from "../../../../UserContext.js";
import PhotoCommentsForm from "../PhotoCommentsForm/index.js";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);

  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <S.Container>
      <S.List ref={commentsSection}>
        {comments.map((comment) => (
          <S.Item key={comment.comment_ID}>
            <strong>{comment.comment_author}:</strong>
            <span>{comment.comment_content}</span>
          </S.Item>
        ))}
      </S.List>
      {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
    </S.Container>
  );
};

export default PhotoComments;
