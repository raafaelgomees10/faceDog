import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles.js";
import { useSelector } from "react-redux";
// import { UserContext } from "../../../../UserContext.js";
import PhotoCommentsForm from "../PhotoCommentsForm/index.js";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);

  const commentsSection = useRef(null);
  // const { login } = useContext(UserContext);
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <S.List
        className={`${props.single ? "single" : ""}`}
        ref={commentsSection}
      >
        {comments.map((comment) => (
          <S.Item key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </S.Item>
        ))}
      </S.List>
      {/* user logado? */}
      {data && (
        <PhotoCommentsForm
          id={props.id}
          single={props.single}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
